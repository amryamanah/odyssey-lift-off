const resolvers = {
    Query: {
        // return an array of Track that will be used to populate 
        // the homepage grid of our web client
        tracksForHome: (_, __, context) => {
            console.log(context);
            return context.dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: (parent, _, { dataSources }) => {
            console.log(parent);
            return dataSources.trackAPI.getAuthor(parent.authorId);
        }
    }
};

module.exports = resolvers;