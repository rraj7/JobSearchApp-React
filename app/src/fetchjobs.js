import {useEffect, useReducer } from 'react';
import axios from 'axios';

//Creating different actions to perform while loading
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://jobs.github.com/positions.json'
//"proxy": "https://cors-anywhere.herokuapp.com",


//Hooks - red ucer function to handle differnet states in the job
function reducer(state, action){
    switch(action.type){
        case ACTIONS.MAKE_REQUEST: 
            return {loading: true, jobs: []}

        case ACTIONS.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}

        case ACTIONS.ERROR: 
            return {...state, loading: false, error: action.payload.error, jobs: []}

        default: 
            return state


    }

}

export default function useFetchjobs(parms, page){
    const [state, dispatch] = useReducer(reducer,{jobs: [], loading: true})

    //Using React Effect Hooks - to don't need to re-run the whole page whenever parms change

    useEffect(()=> {
        dispatch({type: ACTIONS.MAKE_REQUEST})

        const options = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }

        axios.get(BASE_URL, {
            parms: {markdown: true, page: page, ...parms}
        }).then (res=>{
            dispatch({type: ACTIONS.GET_DATA, payload: {jobs: res.data}})
        }).catch(e=>{
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })
    }, [parms, page])

    return state

}