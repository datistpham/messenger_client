import { useQuery } from "react-query"
import { gql, request } from 'graphql-request'
const endpoint= 'http://localhost:4000/graphql'
const GetListMessage= ()=> {
    return useQuery("userListMessage", async ()=> {
        const data= await request(
            endpoint,
            gql `
                query {
                    userListMessage(list: ["61d7c9b185d2361ba53d82a1","61d80fe17470cc0db8bd5e60"]) {
                        firstname,
                        surname,
                        avatar
                    }
                }
            `
        )
        return data
    })
}

export { GetListMessage }