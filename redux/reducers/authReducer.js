import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LIST_TIME_ZONE_SUCCESS,
  LIST_TIME_ZONE_FAIL,
} from '../actions/authAction';

const initialState = {
  isLogin: false,
  listTimeZone:[],
  error:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_TIME_ZONE_SUCCESS:
      return {
        ...state,
        listTimeZone: action.payload,
      };
    case LIST_TIME_ZONE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLogin: action.payload,
      };
  }

  return state;
}
