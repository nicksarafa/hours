/**
 * @export Link
 * @description its a text link
 * @todo customize link style
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const Link = ({ linkLabel }) => (
  <a>
    <div>({ linkLabel })</div>
  </a>
)

Link.propTypes = {
  linkLabel: PropTypes.string.isRequired,
}

Link.defaultProps = {
  linkLabel: 'NEEDS LABEL',
}

export default Link