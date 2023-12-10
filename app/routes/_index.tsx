import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-slate-900 text-white h-full min-h-[100dvh] grid place-content-center">
      <div className="bg-white text-black py-10 px-20">
        <h1>Splash</h1>
        <div className="flex gap-2">
          <a href="/en/home">en</a>
          <a href="/fr/home">fr</a>
        </div>
      </div>
    </div>
  );
}
