import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { routerRedux } from 'dva/router'
import { connect } from 'dva'
// import { Row, Col, Button, Popconfirm } from 'antd'
// import { Page } from 'components'
// import queryString from 'query-string'
// import List from '../../components/Users/List'
// import Filter from '../../components/Users/Filter'
// import Modal from './Modal'

@connect(state => ({ markDown: state.markDown }))
class MarkDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mustOk: false,
      afterDetail: false,
      record: {}, // 记录点击的对象
      data: [],
      dataCopy: [],
      confirm: false,
      cancel: false,
      recordDetail: {},
    }
  }
  render () {
    return(
      <div>111</div>
    )
  }
}

export default MarkDown