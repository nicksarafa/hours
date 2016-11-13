/**
 * @export Navigation
 * @description container for top navigation
 * @todo remove placeholder margins
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
    const style = {
      container: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        marginTop: 21,
      },
      subWrap: {
        marginBottom: 13,
      },
    }

    return (
      <div style={style.container}>
        <div style={style.subWrap}>
          <Hamburger isOpen={this.state.isHidden} />
        </div>
        <Logo color="" />
        <div style={style.subWrap}>
          <Link linkLabel="Hire Me" />
        </div>
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