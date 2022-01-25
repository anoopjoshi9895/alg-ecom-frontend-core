import {
  AppSettingsDataViewModel,
  AppSettingsStateViewModel,
  initialAppSettingsStateViewModel
} from './ViewModel'
import { Dispatch } from 'redux'
import { api } from '../../api'
import {
  createAction,
  createActionWithPayload,
  IAction,
  IActionWithPayload
} from '../../utils/action-utils'

export * from './ViewModel'

export const appSettingsReducer = (
  state: AppSettingsStateViewModel = initialAppSettingsStateViewModel,
  action: any
): AppSettingsStateViewModel => {
  switch (action.type) {
    // login
    case appSettingsActionTypes.REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      }
    case appSettingsActionTypes.LOADED:
      if (!state.languageID) {
        if (action.payload?.languagesList?.length > 0) {
          api.setLanguageID(action.payload?.languagesList[0]?.languageID)
        }
        if (action.payload?.currencyList?.length > 0) {
          api.setCurrencyID(action.payload?.currencyList[0]?.currencyID)
        }
        if (action.payload?.websiteList?.length > 0) {
          api.setWebsiteID(action.payload?.websiteList[0]?.websiteID)
        }
        if (action.payload?.subsitesList?.length > 0) {
          api.setSubsiteID(action.payload?.subsitesList[0]?.storeID)
        }
      }

      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload
      }
    case appSettingsActionTypes.SET_LANGUAGE_ID:
      return {
        ...state,
        languageID: action.payload
      }
    case appSettingsActionTypes.SET_SUBSITE_ID:
      return {
        ...state,
        subsiteID: action.payload
      }
    case appSettingsActionTypes.SET_WEBSITE_ID:
      return {
        ...state,
        websiteID: action.payload
      }
    case appSettingsActionTypes.SET_HTML_DIRECTION_ID:
      return {
        ...state,
        htmlDirection: action.payload
      }
    case appSettingsActionTypes.ERROR:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const appSettingsActionTypes = {
  REQUEST: 'APP_SETTINGS/REQUEST_DATA',
  LOADED: 'APP_SETTINGS/LOADED_DATA',
  ERROR: 'APP_SETTINGS/ERROR_DATA',
  SET_LANGUAGE_ID: 'APP_SETTINGS/LANGUAGE_ID',
  SET_SUBSITE_ID: 'APP_SETTINGS/SUBSITE_ID',
  SET_WEBSITE_ID: 'APP_SETTINGS/WEBSITE_ID',
  SET_HTML_DIRECTION_ID: 'APP_SETTINGS/HTML_DIRECTION_ID'
}

type RequestAppSettingsActionType = IAction<
  typeof appSettingsActionTypes.REQUEST
>
type AppSettingsLoadedActionType = IActionWithPayload<
  typeof appSettingsActionTypes.LOADED,
  AppSettingsDataViewModel
>
type AppSettingsErrorActionType = IActionWithPayload<
  typeof appSettingsActionTypes.ERROR,
  any
>

type AppSettingsLanguageActionType = IActionWithPayload<
  typeof appSettingsActionTypes.SET_LANGUAGE_ID,
  any
>
type AppSettingsSubSiteActionType = IActionWithPayload<
  typeof appSettingsActionTypes.SET_SUBSITE_ID,
  any
>
type AppSettingsWebsiteActionType = IActionWithPayload<
  typeof appSettingsActionTypes.SET_WEBSITE_ID,
  any
>
type AppSettingsHtmlDirectionActionType = IActionWithPayload<
  typeof appSettingsActionTypes.SET_HTML_DIRECTION_ID,
  any
>
// type Actions =
//   | RequestAppSettingsActionType
//   | AppSettingsLoadedActionType
//   | AppSettingsErrorActionType;

export const requestAppSettingsAction = (): RequestAppSettingsActionType => {
  return createAction(appSettingsActionTypes.REQUEST)
}
export const appSettingsLoadedAction = (
  data: AppSettingsDataViewModel
): AppSettingsLoadedActionType => {
  return createActionWithPayload(appSettingsActionTypes.LOADED, data)
}

export const appSettingsErrorAction = (
  error: any
): AppSettingsErrorActionType => {
  return createActionWithPayload(appSettingsActionTypes.ERROR, error)
}

export const AppSettingsLanguageAction = (
  id: number
): AppSettingsLanguageActionType => {
  return createActionWithPayload(appSettingsActionTypes.SET_LANGUAGE_ID, id)
}

export const AppSettingsSubsiteAction = (
  id: number
): AppSettingsSubSiteActionType => {
  return createActionWithPayload(appSettingsActionTypes.SET_SUBSITE_ID, id)
}

export const AppSettingsWebsiteAction = (
  id: number
): AppSettingsWebsiteActionType => {
  return createActionWithPayload(appSettingsActionTypes.SET_WEBSITE_ID, id)
}
export const AppSettingsHtmlDirectionAction = (
  direction: string
): AppSettingsHtmlDirectionActionType => {
  return createActionWithPayload(
    appSettingsActionTypes.SET_HTML_DIRECTION_ID,
    direction
  )
}

export const appSettingsActions = {
  getAppSettings: (onComplete?: () => void) => async (dispatch: Dispatch) => {
    try {
      const response = await api.appSettings.getAppSettings()

      dispatch({
        type: appSettingsActionTypes.LOADED,
        data: response?.data
      })

      if (onComplete) {
        onComplete()
      }
    } catch (error) {
      dispatch({
        type: appSettingsActionTypes.LOADED,
        data: initialAppSettingsStateViewModel
      })
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}
