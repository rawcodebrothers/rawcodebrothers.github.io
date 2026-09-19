export function initMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
  const panel = document.querySelector<HTMLElement>("#menu-mobile");
  if (toggle === null || panel === null) return;

  const openLabel = toggle.dataset.labelOpen ?? "Open menu";
  const closeLabel = toggle.dataset.labelClose ?? "Close menu";

  const setOpen = (open: boolean): void => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? closeLabel : openLabel);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  for (const link of panel.querySelectorAll("[data-menu-close]")) {
    link.addEventListener("click", () => setOpen(false));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  const desktop = window.matchMedia("(min-width: 768px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });
}
