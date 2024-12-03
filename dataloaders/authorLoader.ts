import DataLoader from "dataloader"
import { authors } from "../resolvers/author.resolver"

export default new DataLoader<string, any>(async authorIds => {
            console.log("Chargement des auteurs", authorIds)

            return authorIds.map((authorId: any) => {return authors.find((a :any) => a.id === authorId) || null }) ;
        },{
            cacheKeyFn: (key) => key,
            maxBatchSize: 10,
            cache: true
        })


