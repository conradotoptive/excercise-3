import { createStore } from 'react-redux';
import userReducer from './user/reducer';

const store = createStore(userReducer);
