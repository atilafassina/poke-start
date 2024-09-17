import { A, RouteDefinition, createAsync } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { Card } from "~/components/card";
import { getPokemons } from "~/lib/pokemons";

export const route = {
  load: () => getPokemons(),
} satisfies RouteDefinition;

export default function Home() {
  const pokemons = createAsync(() => getPokemons());

  return (
    <main class="text-center py-10 mx-auto text-gray-700 max-w-5xl ">
      <h1>start.solidjs.com</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="flex gap-5">
          <For
            each={pokemons()}
            children={({ title, image }) => (
              <Card title={title} image={image} />
            )}
          />
        </ul>
      </Suspense>
      <div class="p-5 flex gap-5 justify-center">
        <A
          href="/single"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Single Add
        </A>
        <A
          href="/multi"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Multi Add
        </A>
      </div>
    </main>
  );
}
