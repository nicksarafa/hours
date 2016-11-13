/**
 * @export Hamburger
 * @description hand made hamburger menu icon
 * @todo re-write using flexbox space-between
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const style = {
  center: {
    marginBottom: 20,
    marginTop: 20,
  },
  layer: {
    background: '#COCOCO',
    height: 5,
    width: 55,
  },
}

const Hamburger = () => (
  <div>
    <div style={style.layer} />
    <div style={[style.layer, style.center]} />
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