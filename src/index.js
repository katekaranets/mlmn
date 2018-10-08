import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers/reducers'

const store = createStore(rootReducer, {
  teams: [
    {
      id: 1,
      name: "Команда 1",
      score: 0,
    },
    {
      id: 2,
      name: "Команда 2",
      score: 0,
    },
    {
      id: 3,
      name: "Команда 3",
      score: 0,
    }
  ],
  tours: [
    {
      id: 1,
      categories: [
        {
          id: 1,
          name: 'love',
          questions: [
            {
              id: 1,
              cost: 100,
              isPlayed: false,
              isCat: false,
              isAuction: false,
              question: 'ДЕЛЬФИН',
              question_type: 'song',
              question_url: '',
              answer: 'ДЕЛЬФИН - 520',
              answer_type: 'image',
              answer_url: '',    
            },
            {
              id: 2,
              cost: 200,
              isPlayed: false,
              isCat: false,
              isAuction: false,
              question: 'lalala',
              question_type: 'song',
              question_url: '',
              answer: 'Дhgjhgjhgjhg0',
              answer_type: 'image',
              answer_url: '',    
            },
            {
              id: 3,
              cost: 300,
              isPlayed: false,
              isCat: false,
              isAuction: false,
              question: 'ДЕЛЬФИН',
              question_type: 'song',
              question_url: '',
              answer: 'ДЕЛЬФИН - 520',
              answer_type: 'image',
              answer_url: '',    
            },
            {
              id: 4,
              cost: 400,
              isPlayed: false,
              isCat: false,
              isAuction: false,
              question: 'ДЕЛЬФИН',
              question_type: 'song',
              question_url: '',
              answer: 'ДЕЛЬФИН - 520',
              answer_type: 'image',
              answer_url: '',    
            },
            {
              id: 5,
              cost: 500,
              isPlayed: false,
              isCat: false,
              isAuction: false,
              question: 'ДЕЛЬФИН',
              question_type: 'song',
              question_url: '',
              answer: 'ДЕЛЬФИН - 520',
              answer_type: 'image',
              answer_url: '',    
            }
          ]
        }
      ]
    }
  ]
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)