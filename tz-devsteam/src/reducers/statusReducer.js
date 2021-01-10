import { LOADING, OK } from '../helpers/constants';

const statusReducer = (state = '', action) => {
    switch (action.type) {
        case LOADING:
            return LOADING;
        case OK:
            return OK;
        default:
            return state;
    }
};

export default statusReducer;