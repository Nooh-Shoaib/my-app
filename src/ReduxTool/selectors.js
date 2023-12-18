// selectors.js
import { createSelector } from 'reselect';

const getCounter = (state) => state.counter;
const getData = (state) => state.data;

export const getCounterValue = createSelector([getCounter], (counter) => counter);

export const getAsyncData = createSelector([getData], (data) => data.data);
export const getAsyncLoading = createSelector([getData], (data) => data.loading);
export const getAsyncError = createSelector([getData], (data) => data.error);
