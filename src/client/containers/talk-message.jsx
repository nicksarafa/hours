import { connect } from 'react-redux'
import Message from '../components/message'

const mapStateToProps = state => ({
  message: state.bird.get('hasTalked') ? 'The bird has talked' : 'The bird is ruffling it feathers',
})

export default connect(mapStateToProps)(Message)