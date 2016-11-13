/**
 * @export Link
 * @description its a text link
 * @implements rel="noopener noreferrer" + target="_blank" to minimize security risk(s)
 * @see https://mathiasbynens.github.io/rel-noopener/
 *
 * @todo customize link style
 * @note we disable eslint no-script-lint in order to allow javascript:void(0) to be used
 * @interface
 *
 * @todo research why no-script-lint exists in eslint
 * @see http://eslint.org/docs/rules/no-script-url
 */

import React, { PropTypes } from 'react'

const Link = ({ href, linkLabel }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    { linkLabel }
  </a>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
}

Link.defaultProps = {
  href: 'javascript:void(0)',
  linkLabel: 'NEEDS LABEL',
}

export default Link