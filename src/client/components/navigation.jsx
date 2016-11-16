/**
 * @export Navigation
 * @description container for top navigation
 * @todo remove placeholder margins
 *
 * @interface
 */

import React, { PropTypes } from 'react'
import Menu from '../containers/menu-button'
import Logo from './logo'
import Link from './link'

function Navigation() {
  const style = {
    container: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      marginTop: 21,
    },
    subWrap: {
      marginBottom: 13,
    },
  }

  return (
    <div style={style.container}>
      <div style={style.subWrap}>
        <Menu />
      </div>
      <Logo color="" />
      <div style={style.subWrap}>
        <Link linkLabel="Contact" />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  isHidden: PropTypes.bool.isRequired,
}

Navigation.defaultProps = {
  isHidden: false,
}

export default Navigation