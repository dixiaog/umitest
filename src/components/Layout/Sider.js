import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import { config } from 'utils'
import styles from './Layout.less'
import Menus from './Menu'
import { connect } from 'dva'

@connect(state => ({ sider: state.sider }))
class Sider extends Component {
  constructor(props) {
    super(props)
    // 初始状态
    this.state = {
    }
  }
  render() {
    const { siderFold, menu, changeTheme, darkTheme, location, navOpenKeys, changeOpenKeys } = this.props
    const menusProps = {
      menu,
      siderFold,
      darkTheme,
      location,
      navOpenKeys,
      changeOpenKeys,
    }
    return (
      <div>
        <div className={styles.logo}>
          <img alt="logo" src={config.logo} />
          {siderFold ? '' : <span>{config.name}</span>}
        </div>
        <Menus {...menusProps} />
        {!siderFold ? <div className={styles.switchtheme}>
          <span><Icon type="bulb" />Switch Theme</span>
          <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
        </div> : ''}
      </div>
    )
  }
}
// Sider.propTypes = {
//   menu: PropTypes.array,
//   siderFold: PropTypes.bool,
//   darkTheme: PropTypes.bool,
//   location: PropTypes.object,
//   changeTheme: PropTypes.func,
//   navOpenKeys: PropTypes.array,
//   changeOpenKeys: PropTypes.func,
// }

export default Sider
