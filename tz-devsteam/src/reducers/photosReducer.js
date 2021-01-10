import { ADD_PHOTOS } from '../helpers/constants';

const photoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PHOTOS:
            return [...action.photos];
        default:
            return state;
    }
};

export default photoReducer;