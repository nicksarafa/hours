/**
 * @export Post
 * @description blog post with cover, date, and background coverPhoto
 * @todo update default with static image instead of placehold.it link
 * @todo fix failed propTypes console log errors
 * @todo introduce date module
 */
import React, { PropTypes } from 'react'

const Post = ({ backDrop, title }) => {
  const style = {
    container: {
      backgroundImage: backDrop,
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flex: 1,
      height: 377,
      width: '100%',
    },
    title: {
      alignSelf: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
  }

  return (
    <div style={style.container}>
      <h3 style={style.title}>{title}</h3>
    </div>
  )
}

Post.propTypes = {
  backDrop: PropTypes.instanceOf(Image).isRequired,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  backDrop: 'url(http://placehold.it/1000x1000)',
  title: 'The Gunpowder Treason',
}

export default Post
