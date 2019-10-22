### 群宠后台审核

#### react-lazy-load懒加载

```
import LazyLoad from "react-lazy-load";
<LazyLoad>
    <img src="/images/logo.png" alt=""/>
</LazyLoad>
```

注意：现在react 提供了懒加载
```
import React,{Suspense, lazy } from 'react'
const Loading = <PageLoading/>
const Login = lazy(() => import('./containers/Login'));

render(
    <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/v2/offline" component={LoginAgain}/>
                    <Route path="/v2/HPScope/:firstMenu?/:secondMenu?" component={HPScope}/>
                    <Route path="/v2/404" component={Error404}/>
                    <Route path="/v2" component={MainScope}/>
                    <Route component={Error404}/>
                </Switch>
            </Suspense>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
```

#### 新的生命周期学习
查看：`/pubilc_pc_react/src/components/otherComponent/`


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
