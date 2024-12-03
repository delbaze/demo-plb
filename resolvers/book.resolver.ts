import { authors } from "./author.resolver"; 
import authorLoader from "../dataloaders/authorLoader";
const books = [
  {
    id: 1,
    title: "Le Petit Prince",
    author: authors[0],
    year: 1943,
    genre: "Conte philosophique",
    summary:
      "Un aviateur s'écrase dans le désert du Sahara et rencontre un jeune prince venu d'une autre planète.",
  },
  {
    id: 2,
    title: "Les Misérables",
    author: authors[1],
    year: 1862,
    genre: "Roman",
    summary:
      "L'histoire de Jean Valjean, un ancien bagnard cherchant la rédemption dans un contexte de bouleversements sociaux.",
  },
  {
    id: 3,
    title: "Madame Bovary",
    author: authors[2],
    year: 1857,
    genre: "Roman réaliste",
    summary:
      "Emma Bovary, insatisfaite de sa vie monotone, cherche passion et luxe dans des aventures qui la conduisent au désespoir.",
  },
  {
    id: 4,
    title: "L'Étranger",
    author: authors[3],
    year: 1942,
    genre: "Roman philosophique",
    summary:
      "Meursault, un homme indifférent au monde, se retrouve jugé pour un meurtre dans une société incompréhensible.",
  },
];

export default {
  Query: {
    books: () => {
      return books;
    },
  },
  Book : {
      author: (parent: any, args: any) => {
        console.log("PARENT", parent);
        return authorLoader.load(parent.author.id);

        // return authors.find((a) => a.id == parent.author.id) // là c'est intérressant d'agir pour stocker l'auteur récupéré (cache)
      }
  },
  // Author:(parent: any, args: any, context: any, infos: any) => {
  //   console.log("PARENT", parent);

  // },
};
