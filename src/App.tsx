import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from './redux'
import { history } from './redux/router'
import Routes from './routes'

function App() {
  return (
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <Routes />
          </ConnectedRouter>
      </Provider>
  )
}

export default App
