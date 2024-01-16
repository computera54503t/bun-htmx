import { Layout } from "./Layout";
import { CardList } from "./CardList";
import { GSearch } from "./GSearch";

export function HomePage() {
  const title = "Homelab Dashboard!";
  return (
    <Layout title={title}>
      <div className="flex flex-col gap-8">
        <section className="text-center">
          <GSearch />
          <p className="text-lg italic hidden sm:block">
            "True strength lies not in adding, but in discerning what must be
            removed."
          </p>
        </section>
        <section className="max-w-screen-xl w-full mx-auto p-4 sm:p-8 bg-base-200">
          <CardList />
        </section>
      </div>
    </Layout>
  );
}
