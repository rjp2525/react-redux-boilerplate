import { LOAD_DATA_REQUEST, LOAD_DATA_RECEIVE, LOAD_DATA_FAILURE, ADD_DATA } from '../constants/types'
import { CALL_API } from 'redux-api-middleware'

// Load 100 example posts from a test API
export function loadData() {
  return {
    [CALL_API]: {
      endpoint: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      types: [
        LOAD_DATA_REQUEST,
        LOAD_DATA_RECEIVE,
        LOAD_DATA_FAILURE
      ]
    }
  }
}

export function addData(value) {
    return {
        type: ADD_DATA,
        value
    }
}
