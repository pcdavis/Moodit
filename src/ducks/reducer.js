import axios from 'axios'
const initialState = {
    user: '',
    text: '',
    mood: ''
}

const GET_USER = 'GET_USER';
const GET_TEXT = 'GET_TEXT';
const GET_MOOD = 'GET_MOOD';

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER:
            return Object.assign({}, state, { user: action.payload });

        case GET_TEXT:
            return Object.assign({}, state, { text: action.payload });

        case GET_MOOD:
            return Object.assign({}, state, { mood: action.payload });

        default: 
        return state;
    }
}

export function getUser( user ){
    console.log(user)
<<<<<<< HEAD
     axios.post('/api/user', {user}).then(
         resp => {console.log(resp) }
     )
=======
     axios.post('/api/user', {user}).catch(err => {
         console.log(err)
     })
>>>>>>> master
    return{
        type: GET_USER,
        payload: user
    }
}

export function getText( text ){
    console.log(text);
    return{
        type: GET_TEXT,
        payload: text
    }
}

export function getMood( mood ){
    return{
        type: GET_MOOD,
        payload: mood
    }
}