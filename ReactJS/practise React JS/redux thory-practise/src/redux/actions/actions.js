import {ADD, SUB, ADD2} from './actionTypes'

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function add2(number) {
    return {
        type: ADD2,
        payload: number
    }
}

export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add2(number) )
        }, 3000)
    }
}