import { connect } from 'react-redux'
import Menu from '../components/menu'
import { closeMenu, openMenu } from '../actions/menu-actions'

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(closeMenu(), openMenu()) },
  actionLabel: 'Menu button pressed',
})

export default connect(null, mapDispatchToProps)(Menu)