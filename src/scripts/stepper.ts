const ACTIVE = "is-active";
const ENTRY_RATIO = 0.85;
const ANCHOR_RATIO = 0.45;

const clamp = (value: number): number => Math.min(1, Math.max(0, value));

export function initStepper(): void {
  const root = document.querySelector<HTMLElement>("[data-stepper]");
  if (root === null) return;

  const markers = [...root.querySelectorAll<HTMLElement>("[data-marker]")];
  const fills = [...root.querySelectorAll<HTMLElement>("[data-fill]")];
  const slides = [...root.querySelectorAll<HTMLElement>("[data-step]")];
  if (markers.length === 0 || slides.length !== markers.length) return;

  const sticky = root.querySelector<HTMLElement>(".phase-sticky");
  const pinned = window.matchMedia("(min-width: 768px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const paint = (index: number, progress: number): void => {
    markers.forEach((marker, at) => {
      marker.classList.toggle(ACTIVE, at <= index);
    });

    fills.forEach((fill, at) => {
      fill.style.transform = `scaleX(${clamp(progress - at).toFixed(3)})`;
    });
  };

  const settle = (): void => {
    for (const slide of slides) slide.classList.add(ACTIVE);
    paint(slides.length - 1, slides.length);
  };

  const updatePinned = (): void => {
    if (sticky === null) return;

    const travel = root.offsetHeight - sticky.offsetHeight;
    const passed = -root.getBoundingClientRect().top;
    const ratio = travel > 0 ? clamp(passed / travel) : 0;
    const index = Math.min(slides.length - 1, Math.floor(ratio * slides.length));

    slides.forEach((slide, at) => {
      slide.classList.toggle(ACTIVE, at === index);
    });

    paint(index, ratio * (slides.length - 1));
  };

  const updateStacked = (): void => {
    const entry = window.innerHeight * ENTRY_RATIO;
    const anchor = window.innerHeight * ANCHOR_RATIO;

    let index = 0;
    slides.forEach((slide, at) => {
      const box = slide.getBoundingClientRect();
      if (box.top <= entry) slide.classList.add(ACTIVE);
      if (box.top + box.height / 2 <= anchor) index = at;
    });

    const started = (slides[0]?.getBoundingClientRect().top ?? 0) <= anchor;
    paint(started ? index : -1, started ? index : 0);
  };

  const TRAVEL_PER_SLIDE = 0.72;

  const resize = (): void => {
    if (sticky === null) return;
    if (!pinned.matches) {
      root.style.removeProperty("height");
      return;
    }
    const travel =
      (slides.length - 1) * window.innerHeight * TRAVEL_PER_SLIDE;
    root.style.height = `${Math.round(sticky.offsetHeight + travel)}px`;
  };

  const update = (): void => {
    if (pinned.matches) updatePinned();
    else updateStacked();
  };

  if (reduced.matches) {
    settle();
    return;
  }

  document.documentElement.classList.add("stepper-ready");
  resize();

  let queued = false;
  const schedule = (): void => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(() => {
      queued = false;
      update();
    });
  };

  const remeasure = (): void => {
    resize();
    schedule();
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", remeasure);
  pinned.addEventListener("change", remeasure);
  update();
}
