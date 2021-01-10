import { combineReducers } from 'redux';
import photos from './photosReducer';
import status from './statusReducer';

export default combineReducers({
    photos,
    status,
});