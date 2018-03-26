import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/Home'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(
    reducers,
    applyMiddleware(thunk.withExtraArgument())
)

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
            <Route path="index" component={Home}>
            </Route>
        </Router>
    </Provider >,
    document.getElementById('root')
);


registerServiceWorker();
