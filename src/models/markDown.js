export default {
  namespace: 'markdown',
  state: {
    list: [],
    total: 0,
    lists: [],
    ids: [],
    loading: false,
    searchBarProps: {},
    selectedRows: [],
    selectedRowKeys: [],
    page: {},
    searchParam: {},
    distributors: [],
    shops: [],
    loading1: false,
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {
      yield put({
        type: 'changeState',
        payload: { loading: true },
      })
      // const response = yield call(getOrderSaleDetail, payload)
      // yield put({
      //   type: 'changeState',
      //   payload: { list: response.list, total: response.pagination.total },
      // })
      yield put({
        type: 'changeState',
        payload: { loading: false, selectedRows: [], selectedRowKeys: [], searchParam: payload },
      })
    },
    *search({ payload }, { call, put, select }) {
      const statePage = yield select(state => state.orderSaleDetail.page)
      const page = payload && payload.page ? Object.assign(statePage, payload.page) : statePage
      const searchParam = payload && payload.searchParam ? payload.searchParam : yield select(state => state.orderSaleDetail.searchParam)
      // yield put({
      //   type: 'changeState',
      //   payload: { loading: true },
      // })
      // const response = yield call(getOrderSaleDetail, { ...searchParam, ...page })
      // yield put({
      //   type: 'changeState',
      //   payload: { list: response.list, total: response.pagination.total, loading: false, searchParam, page, selectedRows: [], selectedRowKeys: [] },
      // })
    },
    *export({ payload }, { call, put }) {
      yield put({
        type: 'changeState',
        payload: { loading1: true },
      })
      // yield call(exportOrderSaleDetail, payload)
      yield put({
        type: 'changeState',
        payload: { loading1: false },
      })
    },
  },

  reducers: {
    changeState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
  