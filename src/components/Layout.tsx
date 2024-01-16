import { ReactNode } from "react";

export function Layout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <html className="h-full" data-theme="dark">
      <head>
        <title>{title}</title>
        <meta
          name="description"
          content="A demo app using Bun + HTMX + TailwindCSS + DaisyUI, deployed on Fly.io"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/tailwind.css" />
        <script src="/htmx.js" defer></script>
      </head>
      <body className="h-full">
        <main className="w-full mx-auto flex flex-col gap-8">
          <div className="w-full mx-auto">
            <header
              className="max-w-screen-xl mx-auto w-full flex items-center p-4 pt-8 "
              hx-boost="true"
            >
              <h1>
                <a href="/" className="btn btn-secondary btn-outline">
                  Bun-Dash
                </a>
              </h1>
              <nav className="ml-auto">
                <a href="#" className="btn btn-ghost">
                  About
                </a>
              </nav>
            </header>
          </div>
          <section>{children}</section>
          <footer className="text-center mt-auto p-12 text-sm text-base-content/60">
            <p>
              <em>
                Built with{" "}
                <a
                  href="https://bun.sh"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bun
                </a>
                ,{" "}
                <a
                  href="https://tailwindcss.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                and{" "}
                <a
                  href="https://daisyui.com"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  DaisyUI
                </a>
              </em>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
