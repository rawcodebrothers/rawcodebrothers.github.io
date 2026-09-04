const VISIBLE = "is-visible";
const DEFAULT_MARGIN = "0px 0px -10% 0px";
const FALLBACK_MS = 2500;

const revealAll = (nodes: Iterable<Element>): void => {
  for (const node of nodes) node.classList.add(VISIBLE);
};

export function initReveal(): void {
  const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (nodes.length === 0) return;

  if (typeof IntersectionObserver !== "function") {
    revealAll(nodes);
    return;
  }

  const observers = new Map<string, IntersectionObserver>();

  const observerFor = (margin: string): IntersectionObserver => {
    const existing = observers.get(margin);
    if (existing !== undefined) return existing;

    const created = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add(VISIBLE);
          created.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: margin, threshold: 0.05 },
    );

    observers.set(margin, created);
    return created;
  };

  for (const node of nodes) {
    observerFor(node.dataset.revealMargin ?? DEFAULT_MARGIN).observe(node);
  }

  window.setTimeout(() => {
    const stuck = document.querySelectorAll<HTMLElement>(
      `[data-reveal]:not(.${VISIBLE})`,
    );
    for (const node of stuck) {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.75) {
        node.classList.add(VISIBLE);
      }
    }
  }, FALLBACK_MS);
}
