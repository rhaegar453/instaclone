import * as actions from './actionTypes';
import axios from 'axios';


export const modalToggle=()=>{
    return{
        type:actions.MODAL_TOGGLE
    }
}

export const getDataStarted=()=>{
    return{
        type:actions.GET_DATA_STARTED
    }
}

export const getDataSuccess=(data)=>{
    return{
        type:actions.GET_DATA_SUCCESS,
        payload:data
    }
}
export const getDataFailed=(err)=>{
    return{
        type:actions.GET_DATA_FAILED,
        payload:err
    }
}

export const getData=()=>{
    return dispatch=>{
        dispatch(getDataStarted());
        let url='http://starlord.hackerearth.com/insta';
        axios.get(url).then(data=>{
            dispatch(getDataSuccess(data.data));
        })
        .catch(err=>{
            dispatch(getDataFailed(err));
        })
    }
}

