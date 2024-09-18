import { A, RouteDefinition, createAsync } from '@solidjs/router'
import { For, Show, Suspense } from 'solid-js'
import { Card } from '~/components/Card'
import { Layout } from '~/components/Layout'
import { getLoggedUser } from '~/lib/auth'
import { getPokemons } from '~/lib/pokemons'

export const route = {
  preload: () => {
    getPokemons()
  },
} satisfies RouteDefinition

export default function Home() {
  const pokemons = createAsync(() => getPokemons())

  return (
    <Layout>
      <main class="text-center py-10 mx-auto text-gray-700 max-w-5xl ">
        <h1 class="max-6-xs text-6xl">SolidDex</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ul class="flex flex-row justify-center gap-5">
            <For each={pokemons()}>
              {(pokemon) => (
                <li>
                  <Card pokemon={pokemon} />
                </li>
              )}
            </For>
          </ul>
        </Suspense>
        <div class="p-5 flex gap-5 justify-center">
          <A
            href="/addPokemon"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Pokemon
          </A>
        </div>
      </main>
    </Layout>
  )
}
