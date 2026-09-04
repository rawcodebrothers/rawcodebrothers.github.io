# rawcodelabs.github.io

Site da Raw Code Labs, no ar em <https://rawcodelabs.github.io>.

Construído com [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com).
Páginas estáticas, sem framework de interface: o JavaScript que vai para o
navegador cabe em dois quilobytes e cuida só das animações.

## Rodando localmente

O projeto usa [Bun](https://bun.sh). Com [Nix](https://nixos.org) e
[direnv](https://direnv.net) instalados, `direnv allow` monta o ambiente
inteiro. Sem eles, basta ter o Bun na máquina.

```sh
bun install
bun dev          # servidor de desenvolvimento
```

| Comando         | O que faz                           |
| --------------- | ----------------------------------- |
| `bun dev`       | Sobe o servidor de desenvolvimento  |
| `bun run build` | Compila o site estático em `dist/`  |
| `bun preview`   | Serve o que foi compilado           |
| `bun run lint`  | Verifica a formatação com Prettier  |
| `bun run check` | Verifica os tipos com `astro check` |
| `bun format`    | Formata os arquivos                 |

## Estrutura

```
src/
  components/   Componentes de interface, um por arquivo
  data/         Conteúdo do site: serviços, projetos, time e fases
  icons/        SVGs inline que recebem animação
  layouts/      Layout base com metadados e scripts
  pages/        Rotas
  scripts/      Comportamento no navegador
  styles/       Tokens de design e estilos base
public/
  logos/        Variantes do logo recortadas na arte
  og.png        Imagem de compartilhamento
```

### Onde mexer no conteúdo

Quase todo o texto do site vive em `src/data/site.ts`. Serviços, projetos,
integrantes do time e as três fases do processo são listas tipadas ali. Trocar
um texto não exige tocar em componente nenhum.

O logo em uso é definido por `activeLogo` em `src/data/logos.ts`. A página
`/logos` mostra as oito variantes lado a lado em quatro tamanhos reais, para
comparar antes de trocar.

## Acessibilidade e movimento

Toda animação para quando o sistema pede movimento reduzido. A revelação por
rolagem tem uma rede de segurança: se o observador de interseção falhar,
qualquer bloco ainda escondido dentro da tela aparece depois de 2,5 segundos.
Uma animação não pode esconder o conteúdo.

A seção de processo prende a rolagem apenas a partir de 768px. No celular as
fases ficam empilhadas.

## Publicação

Todo push na `main` compila e publica no GitHub Pages pela esteira em
`.github/workflows/deploy.yml`. Pull requests passam por formatação, tipos e
build em `.github/workflows/ci.yml` antes do merge.
