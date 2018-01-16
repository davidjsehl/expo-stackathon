import firebase from 'firebase';

//ACTION TYPES

const GET_COURTS = 'GET_COURTS';
const GET_COURTS_SUCCESS = 'GET_COURTS_SUCCESS';


//INITIAL STATE

const initialState = {};



//THUNKS

export const getCourtsThunk = () => {
    return (dispatch) => {
        firebase.database().ref('/courts')
        .on('value', snapshot => {
            dispatch({ type: GET_COURTS_SUCCESS, payload: snapshot.val() })
        })
    }
}

//REDUCER

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_COURTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}