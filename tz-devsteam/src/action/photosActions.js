import { toJson } from 'unsplash-js';
import unsplash from '../helpers/unsplash';
import {
    ADD_PHOTOS, LOADING, OK,
} from '../helpers/constants';

export const addPhotos = photos => ({
    type: ADD_PHOTOS,
    photos,
});

export const loading = () => ({
    type: LOADING,
});

export const ok = () => ({
    type: OK,
});

export const getNewPhotos = () => (dispatch => {
    dispatch(loading());
    return unsplash.photos.listPhotos(1, 30, 'latest').then(toJson).then(json => {
        dispatch(addPhotos(json));
        dispatch(ok());
    });
});



