const SermonVideos = (state = [], action) => {
    switch (action.type) {
        case 'SET_SERMONS_VIDEOS':
            return action.payload;
        default:
            return state;
    }
};
export default SermonVideos;