import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
});

export default unsplash;