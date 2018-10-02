import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers/reducers'

const store = createStore(rootReducer, {teams: [
  { 
    id: 1,
    name: "Команда 1",
  },
  {
    id: 2,
    name: "Команда 2",
  },
  {
    id: 3,
    name: "Команда 3",
  }
]})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)