import { createSelector } from 'reselect'

const selectCounter = (state: any) => state.counter

export const selectCounterValue = createSelector(
    [selectCounter],
    counter => counter.value
)
