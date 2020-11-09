// app level selectors..
export const getLoading = state => state.app.loading;
export const getAlert = state => state.app.alert;

// post level selectors..
export const getTopics = state => state.posts.topics;
export const getPosts = state => state.posts.posts;
