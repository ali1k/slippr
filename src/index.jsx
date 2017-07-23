import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import routes, { configureRouter } from './routes'
import { configureStore } from './stores'

const store = configureStore()
const router = configureRouter()

router.start(() => {
  ReactDOM.render(
    <Provider store={ store }>
      { routes }
    </Provider>,
    document.getElementById('slippr')
  )
})
