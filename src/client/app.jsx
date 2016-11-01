import 'babel-polyfill'

import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Test from '../shared/test'

const testMessage = new Test('Hello, David.').output()

const App = props => (
  <div>
    Hal says: {props.message}
  </div>
)

App.propTypes = {
  message: PropTypes.string.isRequired,
}

ReactDOM.render(<App message={testMessage} />, document.querySelector('.app'))