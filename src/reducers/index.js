import { combineReducers } from '@reduxjs/toolkit'
import productosReducer from './productosReducer'
import alertaReducer from './alertaReducer';

const rootReducer = combineReducers({
  productos: productosReducer,
  alerta: alertaReducer
});

export default rootReducer;
