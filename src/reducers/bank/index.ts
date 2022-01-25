import { Dispatch } from 'redux'
import { api } from '../../api'
import { BankListStateModel } from './ViewModel'
export * from './ViewModel'

// initial state
const initialState: BankListStateModel = {
  // isLoading: false,
  financeList: []
}

// reducer
export const bankListReducer = (
  state: BankListStateModel = initialState,
  action: any
): BankListStateModel => {
  switch (action.type) {
    // combination
    case bankListActionTypes.BANK_LIST:
      return {
        ...action.data,
      }
    

    default:
      return state
  }
}

export const bankListActionTypes = {
  // COMBINATION DETAILS
  BANK_LIST: 'BANK_LIST'
}

// action creators & async actions
export const bankListActions = {
  getBankList: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getBankList()

      await dispatch({
        type: bankListActionTypes.BANK_LIST,
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
