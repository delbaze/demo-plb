export const authors = [
  {
    id: 1,
    name: "Antoine de Saint-Exupéry",
    birthYear: 1900,
    deathYear: 1944,
    nationality: "Française",
    notableWorks: ["Le Petit Prince", "Vol de nuit", "Terre des hommes"],
    biography:
      "Antoine de Saint-Exupéry était un écrivain et aviateur français célèbre pour ses récits empreints de poésie et d'humanisme.",
      
  },
  {
    id: 2,
    name: "Victor Hugo",
    birthYear: 1802,
    deathYear: 1885,
    nationality: "Française",
    notableWorks: [
      "Les Misérables",
      "Notre-Dame de Paris",
      "Les Contemplations",
    ],
    biography:
      "Victor Hugo est l'un des plus grands écrivains français, connu pour ses œuvres engagées socialement et politiquement.",
  },
  {
    id: 3,
    name: "Gustave Flaubert",
    birthYear: 1821,
    deathYear: 1880,
    nationality: "Française",
    notableWorks: ["Madame Bovary", "L'Éducation sentimentale", "Salammbô"],
    biography:
      "Gustave Flaubert est reconnu pour sa rigueur stylistique et son réalisme, notamment dans 'Madame Bovary'.",
  },
  {
    id: 4,
    name: "Albert Camus",
    birthYear: 1913,
    deathYear: 1960,
    nationality: "Française",
    notableWorks: ["L'Étranger", "La Peste", "Le Mythe de Sisyphe"],
    biography:
      "Albert Camus, écrivain et philosophe, est une figure majeure de l'existentialisme et de l'absurde.",
  },
];

export default {
  Query: {
    authors: () => {
      return authors;
    },
    findAuthor: (_ : any, args : any) => { // 4 arguments => 1 parent, 2 arguments, 3 : context, 4: infos
        return authors.find((a) => a.id == args.id);
    }
  },
  Mutation: {
    createAuthor: (_: any, args: any) => {
      console.log("ARGs", args);
      let newAuthor = {...args.data, id: Date.now()}
      authors.push(newAuthor);

      return authors;
    }
  }
};
