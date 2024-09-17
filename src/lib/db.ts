import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

export type Pokemon = {
  id: number;
  title: string;
  image: number;
};

export const storage = createStorage({
  driver: fsLiteDriver({
    base: "./data",
  }),
});

//init
storage.setItem("pkm:data", [
  {
    title: "pikachu",
    image: 25
  },
  {
    title: "bulbasaur",
    image: 1
  },
  {
    title: "charmander",
    image: 4
  },
  {
    title: "squirtle",
    image: 7
  }
]);

storage.setItem("pkm:counter", 2);
