
interface Props {
  image: number
  title: string
}

export function Card(props: Props) {
  return (
    <li class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
      <img class="w-52" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.image}.png`} alt="a pokemon image"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          It repeatadly says "{props.title}". The more energetic the pokemon, the faster it speaks.
        </p>
      </div>
      {/* <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div> */}
      </li>
  );
}
