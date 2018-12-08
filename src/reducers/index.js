import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import userInfo from './userInfo'
const initState = false

const extendState = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state

    default:
     return state

  }

}

const rootReducer = combineReducers({
  extendState,userInfo})
export default rootReducer
