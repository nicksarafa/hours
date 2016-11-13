/**
 * @export Logo
 * @description round logo icon
 * @todo design logo icon
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const style = {
  container: {
    backgroundColor: '#C0C0C0',
    borderRadius: 100,
    height: 55,
    width: 55,
  },
}

const Logo = () => (
  <div style={style.container} />
)

Logo.propTypes = {
  color: PropTypes.string.isRequired,
}

Logo.defaultProps = {
  color: '#COCOCO',
}

export default Logo