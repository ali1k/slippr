import React from 'react'
import { RouterProvider } from 'react-router5'
import createRouter from 'router5'
import loggerPlugin from 'router5/plugins/logger'
import browserPlugin from 'router5/plugins/browser'

import * as components from './components'

const {
  App
} = components

const routes = [
  { name: 'home', path: '/' },
  { name: 'page', path: '/pages/:idx' }
]

export function configureRouter () {
  const router =
    createRouter(routes, {
      defaultRoute: 'home'
    })
    .usePlugin(loggerPlugin)
    .usePlugin(browserPlugin({
      useHash: true
    }))

  return router
}

export default (
  <RouterProvider router={ configureRouter() }>
    <App />
  </RouterProvider>
)
