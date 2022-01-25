import { Dispatch } from 'redux'
import { api } from '../../api'
import { cartActionTypes } from '../cart'
import { CombinationDetailsStateModel } from './ViewModel'
export * from './ViewModel'

// initial state
const initialState: CombinationDetailsStateModel = {
  // isLoading: false,
  combinationInfo: [],
  customoptionsList: [],
  isFound: true
}

// reducer
export const combinationDetailsReducer = (
  state: CombinationDetailsStateModel = initialState,
  action: any
): CombinationDetailsStateModel => {
  switch (action.type) {
    // combination
    case combinationDetailsActionTypes.COMBINATION_DETAILS:
      return {
        ...action.data,
        isFound: action.data ? true : false
      }
    case combinationDetailsActionTypes.COMBINATION_DETAILS:
      return {
        combinationInfo: action.data?.combinationInfo || [],
        customoptionsList: state.customoptionsList || []
      }

    default:
      return state
  }
}

export const combinationDetailsActionTypes = {
  // COMBINATION DETAILS
  COMBINATION_DETAILS: 'COMBINATION_DETAILS',
  COMBINATION_PRICE_DETAILS: 'COMBINATION_PRICE_DETAILS'
}

// action creators & async actions
export const CombinationDetailsActions = {
  getCombinationDetails: (
    prodcuctId: number,
    customOptionID: number,
    customOptionVariantID: number,
    onSuccess?: () => void
  ) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getCombinationVariants(
        prodcuctId,
        customOptionID,
        customOptionVariantID
      )
      await dispatch({
        type: combinationDetailsActionTypes.COMBINATION_DETAILS,
        data: response
      })
      await dispatch({
        type: cartActionTypes.UPDATE_DEFAULT_INTERIOR,
        data: response
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({
        type: combinationDetailsActionTypes.COMBINATION_DETAILS,
        data: []
      })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },
  getCombinationPrice: (
    prodcuctId: number,
    customExteriorID: number,
    cutomExteriorVariantID: number,
    customInteriorID: number,
    cutomInteriorVariantID: number,
    onSuccess?: () => void
  ) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getCombinationPrice(
        prodcuctId,
        customExteriorID,
        cutomExteriorVariantID,
        customInteriorID,
        cutomInteriorVariantID
      )
      await dispatch({
        type: combinationDetailsActionTypes.COMBINATION_PRICE_DETAILS,
        data: response
      })
      await dispatch({
        type: cartActionTypes.UPDATE_COMBINATION_PRICE,
        data: response
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({
        type: combinationDetailsActionTypes.COMBINATION_DETAILS,
        data: []
      })
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}
