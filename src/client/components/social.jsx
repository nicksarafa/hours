/**
 * @export Social
 * @description Social media icons for referring users to hours social media pages
 * @property altText: altText for icon image for web accessibility,
 *           href: link to post,
 *           icon: link to icon
 * @todo Substitute icons with SVG(s)
 *
 * @interface
 */

import React, { PropTypes } from 'react'

const styles = {
  button: {
    height: 34,
    width: 34,
  },
  container: {
    left: 34,
    position: 'absolute',
    top: 80,
  },
  icon: {
    height: 21,
    width: 21,
  },
}

const Social = ({ altText, href, icon }) => (
  <div style={styles.container}>
    <a href={href} style={styles.button} target="_blank" rel="noopener noreferrer">
      <img src={icon} style={styles.icon} alt={altText} role="presentation" />
    </a>
  </div>
)

Social.propTypes = {
  altText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

Social.defaultProps = {
  altText: 'Facebook',
  href: 'www.facebook.com',
  icon: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/facebook.svg',
}

export default Social