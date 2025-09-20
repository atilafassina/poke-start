interface Props {
  image: string
  title: string
}

export function Card(props: Props) {
  return (
    <li class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
      <img class="w-52 h-52" src={props.image} alt="a pokemon image" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          It repeatadly says "{props.title}". The more energetic the pokemon,
          the faster it speaks.
        </p>
      </div>
    </li>
  )
}
