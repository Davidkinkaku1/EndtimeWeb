const WorshipVideos = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORSHIPS_VIDEOS':
            return action.payload;
        default:
            return state;
    }
};

export default WorshipVideos;