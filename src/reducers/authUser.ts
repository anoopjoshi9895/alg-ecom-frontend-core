// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';
import { Dispatch } from 'redux'

import { api } from '../api'
import { User } from '../api/models'
import { commonTypes } from './common'

// action types
export const types = {
  // login
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_ERROR: 'AUTH/LOGIN_ERROR',

  // facebook login
  FB_LOGIN_REQUEST: 'AUTH/FB_LOGINLOGIN_REQUEST',
  FB_LOGIN_SUCCESS: 'AUTH/FB_LOGINLOGIN_SUCCESS',
  FB_LOGIN_ERROR: 'AUTH/FB_LOGINLOGIN_ERROR',

  // google login
  GOOGLE_LOGIN_REQUEST: 'AUTH/GOOGLE_LOGINLOGIN_REQUEST',
  GOOGLE_LOGIN_SUCCESS: 'AUTH/GOOGLE_LOGINLOGIN_SUCCESS',
  GOOGLE_LOGIN_ERROR: 'AUTH/GOOGLE_LOGINLOGIN_ERROR',

  // logout
  LOGOUT: 'AUTH/LOGOUT',
  // redirect
  REDIRECT_SAVE: 'AUTH/REDIRECT_SAVE',
  REDIRECT_APPLY: 'AUTH/REDIRECT_APPLY',

  // login
  SIGN_UP_REQUEST: 'AUTH/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'AUTH/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'AUTH/SIGN_UP_ERROR'
}

export interface AuthState {
  isLoading: boolean
  token?: string
  redirectTo: string
  userLogin?: string
  countryCode?: string
  startingCode?: string
  phoneNumber?: string
  loginError?: string
  fbLoginError?: string
  googleLoginError?: string
  otpError?: string
  user?: User
}

// initial state
const initialState: AuthState = {
  isLoading: false,
  redirectTo: '/'
}

// reducer
export const authReducer = (
  state: AuthState = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    // login
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        userLogin: action.data ? action.data.userLogin : state.userLogin,

        loginError: undefined
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.userToken,
        user: action.data,
        loginError: undefined
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: undefined,
        loginError: action.data ? action.data.errorMessage : undefined
      }

    // login
    case types.SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
        otpError: undefined
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.userToken,
        user: action.data,
        otpError: undefined
      }
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        token: undefined,
        otpError: action.data ? action.data.errorMessage : undefined
      }

    // facebook login
    case types.FB_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        fbLoginError: undefined
      }
    case types.FB_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.userToken,
        user: action.data,
        fbLoginError: undefined
      }
    case types.FB_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: undefined,
        fbLoginError: action.data ? action.data.errorMessage : undefined
      }

    // google login
    case types.GOOGLE_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        googleLoginError: undefined
      }
    case types.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.data.userToken,
        user: action.data,
        googleLoginError: undefined
      }
    case types.GOOGLE_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: undefined,
        googleLoginError: action.data ? action.data.errorMessage : undefined
      }

    // logout
    case types.LOGOUT:
      api.setToken(undefined)
      return {
        ...state,
        token: undefined,
        user: undefined
      }
    case commonTypes.RESET_DATA:
      return {
        ...initialState,
        userLogin: state.userLogin,
        countryCode: state.countryCode,
        startingCode: state.startingCode,
        phoneNumber: state.phoneNumber
      }

    // redirect
    case types.REDIRECT_SAVE:
      return { ...state, redirectTo: action.data }
    case types.REDIRECT_APPLY:
      return { ...state, redirectTo: '/' }
    default:
      return state
  }
}

// action creators & async actions
export const authActions = {
  login: (
    data: {
      userLogin: string
      password: string
    },
    onSuccess?: (
      userID?: number,
      userToken?: string,
      verified?: boolean
    ) => void
  ) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.LOGIN_REQUEST,
      data: {
        userLogin: data.userLogin
      }
    })
    try {
      const response = await api.user.login(data)
      if (response.data?.verified !== false) {
        dispatch({ type: types.LOGIN_SUCCESS, data: response.data })
        api.setToken(response.data.userToken)
      }

      if (onSuccess) {
        onSuccess(
          response.data?.userID,
          response.data?.userToken,
          response.data?.verified
        )
      }
    } catch (error) {
      dispatch({
        type: types.LOGIN_ERROR,
        data: { errorMessage: 'Invalid Username or Password!' }
      })
    }
  },

  verifyOtp: (data: any, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    dispatch({
      type: types.SIGN_UP_REQUEST
    })
    try {
      const response = await api.user.verifyOtp(data)
      dispatch({ type: types.SIGN_UP_SUCCESS, data: response.data })
      api.setToken(response.data.userToken)
      if (onSuccess) onSuccess()
    } catch (error) {
      dispatch({
        type: types.SIGN_UP_ERROR,
        data: { errorMessage: 'Invalid OTP!' }
      })
    }
  },

  fbLogin: (data: any, onSuccess?: any, onError?: () => void) => async (
    dispatch: Dispatch
  ) => {
    dispatch({
      type: types.FB_LOGIN_REQUEST
    })
    try {
      const response = await api.user.fbUserSignup(data)
      if (response.data?.verified !== 'No') {
        dispatch({ type: types.FB_LOGIN_SUCCESS, data: response.data })
        api.setToken(response.data.userToken)
      }

      if (onSuccess) onSuccess(response.data?.userID, response.data?.userToken)
    } catch (error) {
      if (onError) onError()
      dispatch({
        type: types.FB_LOGIN_ERROR,
        data: { errorMessage: 'Un able to fetch details' }
      })
    }
  },

  googleLogin: (
    data: any,
    onSuccess?: (userID?: number, userToken?: string) => void,
    onError?: () => void
  ) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.GOOGLE_LOGIN_REQUEST
    })
    try {
      const response = await api.user.googleUserSignup(data)
      if (response?.message === 'verify_phonenumber') {
      } else {
        api.setToken(response.data.userToken)
        dispatch({ type: types.GOOGLE_LOGIN_SUCCESS, data: response.data })
      }

      if (onSuccess) onSuccess(response.data.userID, response.data.userToken)
    } catch (error) {
      if (onError) onError()
      dispatch({
        type: types.GOOGLE_LOGIN_ERROR,
        data: { errorMessage: 'Un able to fetch details' }
      })
    }
  },

  logout: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    dispatch({ type: types.LOGOUT })
    if (onSuccess) onSuccess()
  },

  redirectSave: (to: string) => async (dispatch: Dispatch) => {
    dispatch({ type: types.REDIRECT_SAVE, data: to })
  },

  redirectApply: () => (dispatch: Dispatch) =>
    dispatch({ type: types.REDIRECT_APPLY })
}
