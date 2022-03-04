export const resolvers= {
    Query: {
        user: async(parent, args, context)=> {
            return await context.handleUser.queryUser(args.id)
        },
        userListMessage: async(parent, args, context)=> {
            return await context.handleUser.queryListUserMessage(args.list)
        }
    },
    Mutation: {
        createUser: async(parent, args, context)=> await context.handleUser.createUser(args)
    }
}