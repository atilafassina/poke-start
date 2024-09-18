import { A } from '@solidjs/router'

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Not Found
      </h1>
      <p>Seems like you won't catch em all!</p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Go back
        </A>
      </p>
    </main>
  )
}
