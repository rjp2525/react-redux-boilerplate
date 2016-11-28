import { LOAD_DATA, ADD_DATA } from '../constants/types'

export default function data(state = [], action) {
    switch(action.type) {
        case LOAD_DATA:
            return action.data
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
