/**
 * @export Hamburger
 * @description hand made hamburger menu icon
 * @todo re-write using flexbox space-between
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

const Hamburger = () => (
  <div style={style.container}>
    <div style={style.layer} />
    <div style={style.layer} />
    <div style={style.layer} />
  </div>
)

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

Hamburger.defaultProps = {
  isOpen: false,
}

export default Hamburger