/**
 * @export Logo
 * @description round logo icon
 * @todo design logo icon
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const Logo = () => (
  <div>
    <div className="Logo" />
  </div>
)

Logo.propTypes = {
  color: PropTypes.string.isRequired,
}

Logo.defaultProps = {
  color: '#COCOCO',
}

export default Logo