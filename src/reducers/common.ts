import { Dispatch } from 'redux'

export const commonTypes = {
  RESET_DATA: 'COMMON/RESET_DATA',

  // header menu action
  HEADER_MENU_TOGGLE: 'COMMON/HEADER_MENU_TOGGLE',

  OUTER_CLASS_UPDATE: 'COMMON/OUTER_CLASS_UPDATE',

  // Quick LInk actions
  REQUEST_CALLBACK_TOGGLE: 'COMMON/REQUEST_CALLBACK_TOGGLE',
  BOOK_TEST_DRIVE_TOGGLE: 'COMMON/BOOK_TEST_DRIVE_TOGGLE',
  DOWNLOAD_BROCHURE_TOGGLE: 'COMMON/DOWNLOAD_BROCHURE_TOGGLE',
  REQUEST_QUOTE_TOGGLE: 'COMMON/REQUEST_QUOTE_TOGGLE',
  SHEDULE_SHOWROOM_VISIT_TOGGLE: 'COMMON/SHEDULE_SHOWROOM_VISIT_TOGGLE',
  FINANCE_POPUP_TOGGLE: 'COMMON/FINANCE_POPUP_TOGGLE',
  SERVICE_POPUP_TOGGLE: 'COMMON/SERVICE_POPUP_TOGGLE',

  // student profile
  FETCH_PROFILE_REQUEST: 'AUTH/FETCH_PROFILE_REQUEST',
  FETCH_PROFILE_SUCCESS: 'AUTH/FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR: 'AUTH/FETCH_PROFILE_ERROR'
}

export interface CommonStateViewModel {
  headerMenuOpen: boolean
  requestCallbackPopUpOpen: boolean
  bookTestDrivePopupOpen: boolean
  downloadBrochurePopupOpen: boolean
  requestQuotePopupOpen: boolean
  sheduleShoroomVisitPopupOpen: boolean
  financePopupOpen: boolean
  servicePopupOpen: boolean
  outerClassName: string
}
const initialState: CommonStateViewModel = {
  headerMenuOpen: false,
  bookTestDrivePopupOpen: false,
  downloadBrochurePopupOpen: false,
  requestCallbackPopUpOpen: false,
  requestQuotePopupOpen: false,
  sheduleShoroomVisitPopupOpen: false,
  financePopupOpen: false,
  servicePopupOpen: false,
  outerClassName: ''
}
export const commonReducer = (
  state: CommonStateViewModel = initialState,
  action: any
): CommonStateViewModel => {
  switch (action.type) {
    // login
    case commonTypes.HEADER_MENU_TOGGLE:
      return {
        ...state,
        headerMenuOpen: !state.headerMenuOpen
      }
    case commonTypes.SERVICE_POPUP_TOGGLE:
      return {
        ...state,
        servicePopupOpen: !state.servicePopupOpen
      }
    case commonTypes.FINANCE_POPUP_TOGGLE:
      return {
        ...state,
        financePopupOpen: !state.financePopupOpen
      }
    case commonTypes.OUTER_CLASS_UPDATE:
      return {
        ...state,
        outerClassName: action.payload.data
      }
    case commonTypes.REQUEST_CALLBACK_TOGGLE:
      return {
        ...state,
        requestCallbackPopUpOpen: !state.requestCallbackPopUpOpen
      }
    case commonTypes.BOOK_TEST_DRIVE_TOGGLE:
      return {
        ...state,
        bookTestDrivePopupOpen: !state.bookTestDrivePopupOpen
      }
    case commonTypes.DOWNLOAD_BROCHURE_TOGGLE:
      return {
        ...state,
        downloadBrochurePopupOpen: !state.downloadBrochurePopupOpen
      }
    case commonTypes.REQUEST_QUOTE_TOGGLE:
      return {
        ...state,
        requestQuotePopupOpen: !state.requestQuotePopupOpen
      }
    case commonTypes.SHEDULE_SHOWROOM_VISIT_TOGGLE:
      return {
        ...state,
        sheduleShoroomVisitPopupOpen: !state.sheduleShoroomVisitPopupOpen
      }
    default:
      return state
  }
}
export const commonActions = {
  clearData: (onComplete?: () => void) => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.RESET_DATA })
    if (onComplete) {
      onComplete()
    }
  },
  toggleMenu: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.HEADER_MENU_TOGGLE })
  },
  toggleRequestCallback: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.REQUEST_CALLBACK_TOGGLE })
  },
  toggleBookTestDrive: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.BOOK_TEST_DRIVE_TOGGLE })
  },
  toggleDownloadBrochure: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.DOWNLOAD_BROCHURE_TOGGLE })
  },
  toggleRequestQuote: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.REQUEST_QUOTE_TOGGLE })
  },
  toggleSheduleShowroomVisit: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.SHEDULE_SHOWROOM_VISIT_TOGGLE })
  },
  toggleFinancePopUp: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.FINANCE_POPUP_TOGGLE })
  },
  toggleServicePopUp: () => async (dispatch: Dispatch) => {
    await dispatch({ type: commonTypes.SERVICE_POPUP_TOGGLE })
  },
  updateOuterClassName: (outerClassName: string) => async (
    dispatch: Dispatch
  ) => {
    await dispatch({
      type: commonTypes.OUTER_CLASS_UPDATE,
      payload: { data: outerClassName }
    })
  }
}

export default { types: commonTypes, actions: commonActions }
