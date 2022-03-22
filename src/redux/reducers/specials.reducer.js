const SpecialVideos = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPECIALS_VIDEOS':
            return action.payload;
        default:
            return state;
    }
};


export default SpecialVideos;