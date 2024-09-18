import { action, cache, redirect } from '@solidjs/router'
import { storage, Pokemon } from './db'

export const getPokemons = cache(async () => {
  'use server'
  return ((await storage.getItem('pkm:data')) as Pokemon[]).reverse()
}, 'pokemon')

export const getPokemon = cache(async (id: number) => {
  'use server'

  return ((await storage.getItem('pkm:data')) as Pokemon[]).find(
    (pkm) => pkm.id === id
  )
}, 'pkm')

export const addPkm = action(async (data: FormData) => {
  'use server'

  const pkmInput = Object.fromEntries(data.entries())
  let [{ value: pkm }, { value: index }] = await storage.getItems([
    'pkm:data',
    'pkm:counter',
  ])

  let pokemon
  await Promise.all([
    storage.setItem('pkm:data', [
      ...(pkm as Pokemon[]),
      (pokemon = { ...pkmInput, id: index as number, timestamp: Date.now() }),
    ]),
    storage.setItem('pkm:counter', (index as number) + 1),
  ])

  throw redirect('/')
})

export const justAdd = async (data: FormData) => {
  'use server'

  const pkmInput = Object.fromEntries(data.entries())
  let [{ value: pkm }, { value: index }] = await storage.getItems([
    'pkm:data',
    'pkm:counter',
  ])

  let pokemon
  await Promise.all([
    storage.setItem('pkm:data', [
      ...(pkm as Pokemon[]),
      (pokemon = { ...pkmInput, id: index as number, timestamp: Date.now() }),
    ]),
    storage.setItem('pkm:counter', (index as number) + 1),
  ])

  return pokemon
}
