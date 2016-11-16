/**
 * @export Code
 * @description wrap code in blog posts using this stateless module
 * @todo copy/pasta button for desktop visitors
 *
 * @interface
 */
import React, { PropTypes } from 'react'

const styles = {
  code: {
    color: '#555',
    fontFamily: "'fira mono', monospace",
    fontSize: '.82em',
    fontWeight: 400,
    letterSpacing: 0.5,
    paddingRight: 20,
    textRendering: 'auto',
  },
  pre: {
    background: '#f4f6f8',
    borderRadius: 4,
    lineHeight: '1.2em',
    marginBottom: 55,
    marginLeft: 55,
    marginRight: 55,
    marginTop: 55,
    paddingBottom: 21,
    paddingLeft: 55,
    paddingRight: 55,
    paddingTop: 21,
  },
}

const Code = ({ code }) => (
  <pre style={styles.pre}>
    <code style={styles.code}>{code}</code>
  </pre>
)

Code.propTypes = {
  code: PropTypes.string.isRequired,
}

Code.defaultProps = {
  code: 'hello, world',
}

export default Code
