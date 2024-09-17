import { addPkm } from "~/lib/pokemons";

export default function SingleFlight() {
  return (
    <>
      <a
        href="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block m-5"
      >
        {" "}
        Go back{" "}
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
        <input
          class="border border-gray-400 rounded-md p-1"
          type="number"
          required
          min={1}
          name="image"
          id="image"
          placeholder="Image number"
        />
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Single Flight - Add Pokemon
        </button>
      </form>
    </>
  );
}
