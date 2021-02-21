import React from 'react'
import { Provider } from 'react-redux'
import store from './redux'
import Articles from './components/pages/articles'

function App() {
  return (
      <Provider store={store}>
          <Articles />
      </Provider>
  )
}

export default App
