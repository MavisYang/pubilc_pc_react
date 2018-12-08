import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route,Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Error from './containers/Error'
import Messages from './components/shareComponents/message/Messages'
import SideNavi from './components/sideNavi/SideNavi'
import TopNavi from './components/topNavi/TopNavi'
import LoginMain from './components/loginPortal/LoginMain';//登录
import ReviewMain from "./components/reviewPortal/ReviewMain";//打款审核
import FeedbackMain from "./components/feedbackPortal/FeedbackMain";//问题反馈

export const history = createBrowserHistory()
const MainScope = ({ history }) => {
    return (
        <div className="container">
            <div className="left"><SideNavi history={history} /></div>
            <div className="right">
                <div className="header"><TopNavi history={history} /></div>
                <div className="content">
                    <Switch>
                        <Route path="/home" component={LoginMain} />
                        <Route path='/delivery/manage' component={ReviewMain} />
                        <Route path='/delivery/task' component={FeedbackMain} />
                    </Switch>
                </div>
                <Messages/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/login" component={LoginMain} />
            <Route path="/error" component={Error} />
            <Route path="/" component={MainScope} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
