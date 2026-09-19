{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05-small";
  };

  outputs =
    {
      nixpkgs,
      ...
    }:
    let
      inherit (nixpkgs.lib) genAttrs;
      inherit (nixpkgs.lib.systems) flakeExposed;
      forAllSystems = f: genAttrs flakeExposed (system: f (import nixpkgs { inherit system; }));
    in
    {
      devShells = forAllSystems (
        pkgs:
        let
          inherit (pkgs) mkShell;
        in
        {
          default = mkShell {
            name = "Rawcode Brothers";
            packages = with pkgs; [
              nodejs_24
              bun
              pnpm
              # Playwright's own download is dynamically linked for FHS distros and
              # will not run here, so the browsers come from nixpkgs instead.
              playwright-driver.browsers
            ];

            # Must match the playwright / @playwright/test version pinned in every
            # consumer (apps/api's Chromium renderer gateway, apps/web's
            # @playwright/test) - one shared bundle serves the whole shell, and any
            # consumer whose pin drifts from it starts looking for a browser
            # revision that is not here. Keep every consumer's version identical
            # rather than caret-ranged, or a routine `pnpm install` can drift one
            # of them silently.
            PLAYWRIGHT_BROWSERS_PATH = "${pkgs.playwright-driver.browsers}";
            PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
          };
        }
      );
    };
}
