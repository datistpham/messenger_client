import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import rootReducer from './redux/pure/reducer/index.reducer.js'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {  BrowserRouter as Router } from 'react-router-dom'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store= createStore(
  rootReducer,composeEnhancers(applyMiddleware(thunk))
)
const queryClient= new QueryClient()
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App />
              {/* <ReactQueryDevtools /> */}
            </QueryClientProvider>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('_43ksskd_23we_qeipk3')
);
reportWebVitals();
