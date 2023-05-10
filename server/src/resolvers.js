const resolvers = {
    Query: {
        // return an array of Track that will be used to populate 
        // the homepage grid of our web client
        tracksForHome: (_, __, context) => {
            console.log(context);
            return context.dataSources.trackAPI.getTracksForHome();
        },
        // get a single track by ID, for the track page
        track: (_, args, { dataSources }) => {
            return dataSources.trackAPI.getTrack(args.id);
        },
    },
    Mutation: {
        // increments a track's numberOfViews property
        incrementTrackViews: async (_, { trackId }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(trackId);

                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${trackId}`,
                    track,
                };
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null,
                };
            };
        }
    },
    Track: {
        author: (parent, _, { dataSources }) => {
            console.log(parent);
            return dataSources.trackAPI.getAuthor(parent.authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
    }
};

module.exports = resolvers;