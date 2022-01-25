import { Dispatch } from 'redux'
import { api } from '../../api'
import { CMSStateModel } from './ViewModel'
export * from './ViewModel'

// initial state
export const initialCMSState: CMSStateModel = {
  title: ''
}

// reducer
export const cmsReducer = (
  state: CMSStateModel = initialCMSState,
  action: any
): CMSStateModel => {
  switch (action.type) {
    // combination
    case cmsActionTypes.UPDATE_TITLE:
      return {
        ...action.data
      }

    default:
      return state
  }
}

export const cmsActionTypes = {
  // COMBINATION DETAILS
  UPDATE_TITLE: 'UPDATE_TITLE'
}

// action creators & async actions
export const cmsActions = {
  getCMSData: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getBankList()

      await dispatch({
        type: cmsActionTypes.UPDATE_TITLE,
        data: response
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}
