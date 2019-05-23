
//Action 是 Store 数据（用户输入的数据或服务器响应的数据）的唯一来源。通过 store.dispatch() 将 action 传给 store 。

import * as types from '../constants/ActionTypes'
import { push } from 'react-router-redux'

export const goTo = (name) => (push(name))
export const reviewPull=(data)=>({type:types.REVIEW_DATA,data})
