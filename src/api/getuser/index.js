import { useQuery } from "react-query"
import { gql, request } from 'graphql-request'
const endpoint= 'http://localhost:4000/graphql'
const useGetUser= ()=> {
    return useQuery("user", async ()=> {
        const data= await request(
            endpoint,
            gql `
                query {
                    user(id: "61d3b5fefd6d85b1e8296966") {
                        email
                    }
                }
            `
        )
        return data
    })
}

export { useGetUser }