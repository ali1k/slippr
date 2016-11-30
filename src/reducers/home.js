import Immutable from 'immutable'
import * as Types from '../constants/home'

const initialState = Immutable.Map({ markdown: '', html: '' })

export default function homes (state = initialState, action) {
  switch (action.type) {
    case Types.SET_MARKDOWN_TEXT:
    case Types.EDIT_TEXTAREA_VALUE:
      return Immutable.fromJS(state).merge({ markdown: action.markdown }).toJS()
    case Types.SHOW_HOME:
    default:
      return state
  }
}
