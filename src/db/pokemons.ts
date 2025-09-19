import { action, query, redirect } from '@solidjs/router'
import { sql } from './client'

export type Pokemon = {
  id: number
  title: string
  image: string
}

function numberToImage(num: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`
}

const POKEMON_LIST = [
  { name: 'Bulbasaur', id: 1 },
  { name: 'Ivysaur', id: 2 },
  { name: 'Venusaur', id: 3 },
  { name: 'Charmander', id: 4 },
  { name: 'Charmeleon', id: 5 },
  { name: 'Charizard', id: 6 },
  { name: 'Squirtle', id: 7 },
  { name: 'Wartortle', id: 8 },
  { name: 'Blastoise', id: 9 },
  { name: 'Caterpie', id: 10 },
  { name: 'Metapod', id: 11 },
  { name: 'Butterfree', id: 12 },
  { name: 'Weedle', id: 13 },
  { name: 'Kakuna', id: 14 },
  { name: 'Beedrill', id: 15 },
  { name: 'Pidgey', id: 16 },
  { name: 'Pidgeotto', id: 17 },
  { name: 'Pidgeot', id: 18 },
  { name: 'Rattata', id: 19 },
  { name: 'Raticate', id: 20 },
  { name: 'Spearow', id: 21 },
  { name: 'Fearow', id: 22 },
  { name: 'Ekans', id: 23 },
  { name: 'Arbok', id: 24 },
  { name: 'Pikachu', id: 25 },
  { name: 'Raichu', id: 26 },
  { name: 'Sandshrew', id: 27 },
  { name: 'Sandslash', id: 28 },
  { name: 'Nidoran♀', id: 29 },
  { name: 'Nidorina', id: 30 },
]

function nameToImage(pokemonName: string) {
  const pokemon = POKEMON_LIST.find(
    (p) => p.name.toLowerCase() === pokemonName.toLowerCase(),
  )
  return pokemon ? numberToImage(pokemon.id) : numberToImage(1)
}

export function getPokemonNames() {
  return POKEMON_LIST.map((p) => p.name)
}

export const getRandomPokemons = query(async () => {
  'use server'
  const result = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 20`
  return result as Pokemon[]
}, 'pokemon')

export const getPokemons = query(async () => {
  'use server'
  const result = await sql`SELECT * FROM pokemon ORDER BY id DESC LIMIT 20`
  return result as Pokemon[]
}, 'pokemon')

export const getPokemon = query(async (id: number) => {
  'use server'
  const result = await sql`SELECT * FROM pokemon WHERE id = ${id}`
  return result[0] as Pokemon | undefined
}, 'pkm')

export const addPkm = action(async (data: FormData) => {
  'use server'

  const pkmInput = Object.fromEntries(data.entries())

  await sql.query(
    `
    INSERT INTO pokemon (title, image) 
    VALUES ($1, $2)
  `,
    [pkmInput.title, nameToImage(String(pkmInput.pokemonName))],
  )

  throw redirect('/')
})

export const justAdd = async (data: FormData) => {
  'use server'

  const pkmInput = Object.fromEntries(data.entries())

  const result = await sql.query(
    `
    INSERT INTO pokemon (title, image) 
    VALUES ($1, $2)
    RETURNING *
  `,
    [pkmInput.title, nameToImage(String(pkmInput.pokemonName))],
  )

  return result[0] as Pokemon
}
