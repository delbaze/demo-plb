import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import depthLimit from "graphql-depth-limit";


const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(10)]
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({req, res}) => {
        /// travailler avec ? 
      
      return {toto: "coucou", req, res} } 
  });
  console.log(`Server lancé sur  ${url}`);
}

main();
