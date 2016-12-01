import { LOAD_DATA_RECEIVE, ADD_DATA } from '../constants/types'

export default function data(state = [], action) {
    switch(action.type) {
        case LOAD_DATA_RECEIVE:
            return action.payload
        case ADD_DATA:
            let id = state[state.length - 1].id + 1

            return [
                ...state,
                {id, title: action.value}
            ]
        default:
            return state
    }
}
