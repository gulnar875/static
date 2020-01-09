import React from 'react'
import ReactDom from 'react-dom'
import createStore from './redux/createStore'
import { AppContainer } from 'react-hot-loader'

const store = createStore(window.__INITIAL_STATE__) // eslint-disable-line no-undef
const MOUNT_NODE = document.getElementById('root') // eslint-disable-line no-undef
window.initialLoad = true // eslint-disable-line no-undef

if (__DEV__) {// eslint-disable-line
  if (window.initialLoad) { // eslint-disable-line no-undef
    try {
      const NextApp = require('./components/App').default
      ReactDom.render(
        <AppContainer>
          <NextApp store={store} />
        </AppContainer>,
        MOUNT_NODE
      )
    } catch (e) {
      const Redbox = require('redbox-react').default
      ReactDom.render(
        <AppContainer>
          <Redbox error={e} />
        </AppContainer>,
        MOUNT_NODE
      )
    }
  }

  if (module.hot) {
    module.hot.accept([
      './components/App'
      // './routes/index'
    ], () => {
      window.initialLoad = false // eslint-disable-line no-undef
      setImmediate(() => {
        ReactDom.unmountComponentAtNode(MOUNT_NODE)
        try {
          const NextApp = require('./components/App').default
          ReactDom.render(
            <AppContainer>
              <NextApp store={store} />
            </AppContainer>,
            MOUNT_NODE
          )
        } catch (e) {
          const Redbox = require('redbox-react').default
          console.error(e)
          ReactDom.render(
            <AppContainer>
              <Redbox error={e} />
            </AppContainer>,
            MOUNT_NODE
          )
        }
      })
    })
  }
}

if (__PROD__) { // eslint-disable-line
  const NextApp = require('./components/App').default
  ReactDom.render(
    <AppContainer>
      <NextApp store={store} />
    </AppContainer>,
    MOUNT_NODE
  )
}
