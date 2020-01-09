const initialState = {}

const ACTION_HANDLERS = {
  ['WELCOME']: state => {
    return {
      ...state
    }
  }
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
