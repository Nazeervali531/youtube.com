import axios from 'axios';

const KEY='AIzaSyBb1v5xj0wnbidhBG5h0PhYTr88avveVzE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:KEY
    }
});



