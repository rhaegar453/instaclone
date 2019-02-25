import * as actionTypes from './actionTypes';
import { realpathSync } from 'fs';

const initialState={
    modalOpen:false,
    data:[],
    loading:false,
    error:false,
    success:false
}

const store=(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.MODAL_TOGGLE:
            return{
                ...state,
                modalOpen:!state.modalOpen
            }
        case actionTypes.GET_DATA_STARTED:
            return{
                ...state,
                loading:true
            }
        case actionTypes.GET_DATA_FAILED:
            return{
                ...state,
                error:true
            }
        case actionTypes.GET_DATA_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state;
    }
}

export default store;