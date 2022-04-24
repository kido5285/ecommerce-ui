import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "./userRedux";
import { publicReq } from "../reqMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (e) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (e) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (e) {
    dispatch(logoutFailure());
  }
};