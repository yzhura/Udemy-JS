import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-419e0.firebaseio.com/'
})