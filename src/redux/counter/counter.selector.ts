import { createSelector } from 'reselect'
import { store } from '../store'

export const getCounterValue = () => store.getState().counter.value

const selectCounter = (state: any) => state.counter

export const selectCounterValue = createSelector(
  [selectCounter],
  counter => counter.value
)
