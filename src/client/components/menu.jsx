/**
 * @export Menu
 * @description hand made menu icon
 * @todo cook something up thats better than a hamburger
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const style = {
  container: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: 21,
    justifyContent: 'space-between',
    width: 21,
  },
  layer: {
    backgroundColor: '#C0C0C0',
    height: 2,
  },
}

const Menu = () => (
  <div style={style.container}>
    <div style={style.layer} />
    <div style={style.layer} />
    <div style={style.layer} />
  </div>
)

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

Menu.defaultProps = {
  isOpen: false,
}

export default Menu