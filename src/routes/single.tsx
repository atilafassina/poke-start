import { For } from 'solid-js'
import { addPkm, getPokemonNames } from '~/db/pokemons'

export default function SingleFlight() {
  const pokemonNames = getPokemonNames()

  return (
    <>
      <a
        href="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-5"
      >
        {' '}
        Go back{' '}
      </a>
      <form
        method="post"
        action={addPkm}
        class="max-w-prose flex flex-col mx-auto py-10 gap-5"
      >
        <input
          type="text"
          required
          name="title"
          id="title"
          placeholder="Pokemon name"
          class="border border-gray-400 rounded-md p-1"
        />
        <select
          name="pokemonName"
          id="pokemonName"
          required
          class="border border-gray-400 rounded-md p-1"
        >
          <option value="">Select a Pokemon for the image</option>
          <For each={pokemonNames}>
            {(name) => <option value={name}>{name}</option>}
          </For>
        </select>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Single Flight - Add Pokemon
        </button>
      </form>
    </>
  )
}
