/**
 * @export Navigation
 * @description container for top navigation
 *
 * @interface
 */

import React, { Component, PropTypes } from 'react'
import Hamburger from './hamburger'
import Logo from './logo'
import Link from './link'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
    }
  }

  render() {
    return (
      <div>
        <Hamburger isOpen={this.state.isHidden} />
        <Logo color="" />
        <Link linkLabel="Hire Me" />
      </div>
    )
  }
}

Navigation.propTypes = {
  isHidden: PropTypes.bool.isRequired,
}

Navigation.defaultProps = {
  isHidden: false,
}

export default Navigation