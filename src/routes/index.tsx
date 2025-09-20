import { A, RouteDefinition, createAsync } from '@solidjs/router'
import { For, Suspense } from 'solid-js'
import { Card } from '~/components/card'
import { getPokemons } from '~/db/pokemons'

export const route = {
  load: () => getPokemons(),
} satisfies RouteDefinition

export default function Home() {
  const pokemons = createAsync(() => getPokemons())

  return (
    <main class="text-center py-10 mx-auto text-gray-700 max-w-5xl ">
      <h1 class="font-mono">github.com/atilafassina/poke-start</h1>
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
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <For
            each={pokemons()}
            children={({ title, image }) => (
              <Card title={title} image={image} />
            )}
          />
        </ul>
      </Suspense>
    </main>
  )
}
