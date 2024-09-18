import {
  A,
  RouteDefinition,
  RouteSectionProps,
  createAsync,
} from '@solidjs/router'
import { Show } from 'solid-js'
import { getPokemon } from '~/lib/pokemons'

export const route = {
  preload({ params }) {
    getPokemon(+params.id)
  },
} satisfies RouteDefinition

export default function ViewPokemon(props: RouteSectionProps) {
  const pokemon = createAsync(() => getPokemon(+props.params.id))

  return (
    <Show when={pokemon()}>
      {(pokemon) => (
        <div class="flex flex-col items-center">
          <img
            class="w-52"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon().image
            }.png`}
            alt="a pokemon image"
          />
          <div class="px-6 py-4 flex flex-col items-center ">
            <div class="font-bold text-xl mb-2 ">{pokemon().title}</div>
            <p class="text-gray-700 text-base">
              It repeatadly says "{pokemon().title}". The more energetic the
              pokemon, the faster it speaks.
            </p>
          </div>
          <A href="/" class="text-sky-600 hover:underline">
            Go back
          </A>
        </div>
      )}
    </Show>
  )
}
