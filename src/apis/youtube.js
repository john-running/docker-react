import axios from 'axios';

//const KEY = 'AIzaSyAT4WXCvr3PI-oyIA1uwCoq7ekO1oSqcNg'
// const KEY = 'AIzaSyDxfyVAjteCTI4jB2YlUdO0cG9InsNw2Ag';
const KEY = 'AIzaSyCKMPXpS0wguEgPmk5_woI0XcUSh0wtgiU';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxresults: 5,
    key: KEY
  }
})
