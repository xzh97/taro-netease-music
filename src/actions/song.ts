import {
    GETSONGDETAIL,
    GETPLAYLISTDETAIL,
    GETRECOMMENDPLAYLIST,
    GETRECOMMENDDJ,
    GETRECOMMENDNEWSONG,
    GETRECOMMEND,
    GETSONGINFO,
    CHANGEPLAYMODE,
    GETLIKEMUSICLIST,
    UPDATELIKEMUSICLIST,
    UPDATEPLAYSTATUS,
    UPDATECANPLAYLIST,
    UPDATERECENTTAB,
    RESETPLAYLIST,
} from '../constants/song'

import api from '../services/api'
import { parseLrc } from '../utils/common'


export const getSongDetail  = payload => {
    return {
        type: GETSONGDETAIL,
        payload
    }
}

export const getPlayListDetail  = payload => {
    const {id} = payload
    return dispatch => {
        dispatch({
            type: RESETPLAYLIST
        })

        
    }
    return {
        type: GETPLAYLISTDETAIL,
        payload
    }
}
