import { CardItem } from "./CardItem";
import { Hero } from "./Hero";
import { Layout } from "./Layout";
import { Loading } from "./Loading";

export function HomePage() {
  const title = "Homelab Dashboard!";
  return (
    <Layout title={title}>
      <div className="flex flex-col gap-8">
        <section className="text-center">
          <p className="text-lg italic">
            "True strength lies not in adding, but in discerning what must be
            removed."
          </p>
        </section>
        <section className="max-w-screen-xl w-full mx-auto flex flex-col gap-4 p-8 bg-base-200">
          <CardItem />
        </section>
        <section className="max-w-md mx-auto flex flex-col gap-4 p-8">
          <h2 className="uppercase text-xl">
            <strong>HTMX</strong>
          </h2>
          <p className="text-sm text-base-content/80">
            <em>
              The "About" link above and the top menu uses{" "}
              <code className="text-accent">hx-boost="true"</code> to do
              client-side navigation.
            </em>
          </p>
          <p className="text-sm text-base-content/80">
            <em>
              The <code className="text-accent">&lt;CurrentTime /&gt;</code>{" "}
              component below uses{" "}
              <code className="text-accent">hx-trigger="load"</code> to fetch
              the current time from the server and display it (with a simulated
              delay on initial load).
            </em>
          </p>
        </section>
        {/* The delay is to show the loading indicator, otherwise it would probably render to fast to notice */}
        <div
          hx-trigger="load delay:2s"
          hx-get="/time"
          hx-swap="innerHTML"
          className="flex items-center justify-center h-64"
        >
          <Loading />
        </div>
      </div>
    </Layout>
  );
}
