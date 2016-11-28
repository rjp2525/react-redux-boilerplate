import { LOAD_DATA, ADD_DATA } from '../constants/types'

const data = [
    {id: 1, title: 'React'},
    {id: 2, title: 'Redux'}
]

export function loadData() {
    return {
        type: LOAD_DATA,
        data
    }
}

export function addData(value) {
    return {
        type: ADD_DATA,
        value
    }
}
