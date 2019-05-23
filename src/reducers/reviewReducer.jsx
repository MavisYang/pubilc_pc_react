import {REVIEW_DATA} from '../constants/ActionTypes';

const reviewData = {
    data: ''
}
////纯函数
// Reducer 用来处理对 Action 对状态树的更改，接收旧的 state 和 action，返回新的 state
export default function reviewReducer(state = reviewData, action) {
    console.log(state,action)
    switch (action.type) {
        case REVIEW_DATA:
            return {
                data: action.data
            }
        default:
            return state
    }

}
