import { useNavigate } from "@solidjs/router";
import { justAdd } from "~/lib/pokemons";

export default function MultiFlight() {
  const goto = useNavigate();
  return (
    <>
      <a
        href="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 inline-block py-2 px-4 rounded"
      >
        {" "}
        Go back{" "}
      </a>

      <form
        method="post"
        class="max-w-prose flex flex-col mx-auto py-10 gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;

          justAdd(new FormData(form)).then(() => goto("/"));
        }}
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
          MultiFlight - Add Pokemon
        </button>
      </form>
    </>
  );
}
