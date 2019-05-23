import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reviewReducer from './reviewReducer'

//一个renduer
//专门创建了reducers文件夹 存储不同的
const initState = false
const extendState = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return !state

    default:
     return state

  }

}

//combineReducers
//使用combineReducers来合并reducer，需要子reducer的名字跟对应要接收的state的key一致，
const rootReducer = combineReducers({
  extendState, reviewReducer,
  routing:routerReducer
})
export default rootReducer

//一个reducer 函数，stores location 从history更新。如果你使用 combineReducers,它应该被嵌套在 routing这个key下。
