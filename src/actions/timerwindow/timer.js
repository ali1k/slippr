import * as Types from '../../constants/timerwindow/actions'
import { convertTimeToNumber } from '../../utils/timeConverter'

export function resetTimer () {
  return { type: Types.RESET_TIMER }
}

export function changeValue (value) {
  const time = convertTimeToNumber(value)
  return { type: Types.CHANGE_VALUE, limit: value, hours: time[0], minutes: time[1], seconds: time[2] }
}

export function startTimer (intervalId) {
  return { type: Types.START_TIMER, intervalId: intervalId }
}

export function runTicker (hours, minutes, seconds) {
  return { type: Types.RUN_TICKER, hours: hours, minutes: minutes, seconds: seconds }
}

export function stopTimer (intervalId) {
  return { type: Types.STOP_TIMER, intervalId: intervalId }
}

export function clearTimer () {
  return { type: Types.CLEAR_TIMER }
}

export function startBlinkPage () {
  return { type: Types.START_BLINK_PAGE }
}

export function stopBlinkPage () {
  return { type: Types.STOP_BLINK_PAGE }
}
