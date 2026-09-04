const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>{}[]/\\";
const STEP_MS = 30;
const STAGGER_STEPS = 1;
const SETTLE_STEPS = 4;

type Letter = {
  readonly node: HTMLElement;
  readonly final: string;
  readonly lockStep: number;
};

const randomGlyph = (): string =>
  GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "#";

function run(letters: readonly Letter[], onDone: () => void): number {
  const total = Math.max(...letters.map((l) => l.lockStep));
  let step = 0;

  const id = window.setInterval(() => {
    step += 1;

    for (const { node, final, lockStep } of letters) {
      if (final === "\u00a0") continue;
      node.textContent = step >= lockStep ? final : randomGlyph();
    }

    if (step > total) {
      window.clearInterval(id);
      for (const { node, final } of letters) node.textContent = final;
      onDone();
    }
  }, STEP_MS);

  return id;
}

export function initScramble(root: ParentNode = document): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  for (const host of root.querySelectorAll<HTMLElement>("[data-scramble]")) {
    const nodes = host.querySelectorAll<HTMLElement>("[data-letter]");
    if (nodes.length === 0) continue;

    const letters: Letter[] = [...nodes].map((node, index) => ({
      node,
      final: node.dataset.letter ?? node.textContent ?? "",
      lockStep: SETTLE_STEPS + index * STAGGER_STEPS,
    }));

    let timer: number | null = null;
    const stop = (): void => {
      if (timer !== null) window.clearInterval(timer);
      timer = null;
      for (const { node, final } of letters) node.textContent = final;
    };

    const trigger = host.closest<HTMLElement>("a, button") ?? host;

    trigger.addEventListener("pointerenter", () => {
      if (timer !== null) return;
      timer = run(letters, () => {
        timer = null;
      });
    });

    trigger.addEventListener("pointerleave", stop);
    trigger.addEventListener("blur", stop);
    trigger.addEventListener("focus", () => {
      if (timer === null) {
        timer = run(letters, () => {
          timer = null;
        });
      }
    });
  }
}
