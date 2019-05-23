import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import reducers from './reducers'
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import Error from './containers/Error'
import Messages from './components/shareComponents/message/Messages'
import SideNavi from './components/sideNavi/SideNavi'
import TopNavi from './components/topNavi/TopNavi'
import LoginMain from './components/loginPortal/LoginMain';//登录
import ReviewStore from "./containers/ReviewStore";//打款审核
import FeedbackScope from "./containers/FeedbackScope";//问题反馈
import Father from './components/testComponent/Father'
import LifeCycleMain from './components/otherComponent/LifeCycleMain'
import OtherButton from './components/otherComponent/OtherButton'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)
export const store=createStore(
    reducers,
    applyMiddleware(middleware)
    // compose(applyMiddleware(middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错

)



store.getState()

// console.log(store.getState())

store.dispatch({
    type:'DIS',
    num:1
})

// console.log(store,'store')
const MainScope = ({history}) => {
    return (
        <div className="container">
            <div className="left"><SideNavi history={history}/></div>
            <div className="right">
                <div className="header"><TopNavi history={history}/></div>
                <div className="content">
                    <Switch>
                        <Route path='/review' component={ReviewStore}/>
                        <Route path='/feedback' component={FeedbackScope}/>
                        <Route exact path='/testview' component={Father}/>
                        <Route path='/testview/lifeCycle' component={LifeCycleMain}/>
                        <Route path='/testview/button' component={OtherButton}/>
                    </Switch>
                </div>
                <Messages/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/login" component={LoginMain}/>
                <Route path="/error" component={Error}/>
                <Route path="/" component={MainScope}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
