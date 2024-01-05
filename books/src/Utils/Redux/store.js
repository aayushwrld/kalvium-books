// ^ importing and destructuring required components
import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

// * creating store and exporting it
export const store = createStore(reducer);