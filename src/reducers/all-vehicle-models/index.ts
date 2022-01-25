import { Dispatch } from 'redux'
import { api } from '../../api'
import { AllVehicleStateModel } from './ViewModel'
export * from './ViewModel'

// initial state
const initialState: AllVehicleStateModel = {
  // isLoading: false,
  modelsList: []
}

// reducer
export const allVehicleModelListReducer = (
  state: AllVehicleStateModel = initialState,
  action: any
): AllVehicleStateModel => {
  switch (action.type) {
    // combination
    case allVehicleModelActionTypes.ALL_VEHICLE_LIST:
      return {
        ...action.data
      }

    default:
      return state
  }
}

export const allVehicleModelActionTypes = {
  // COMBINATION DETAILS
  ALL_VEHICLE_LIST: 'ALL_VEHICLE_LIST'
}

// action creators & async actions
export const allVehicleModelActions = {
  getVehicleModelsList: (onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getVehicleModelList()

      await dispatch({
        type: allVehicleModelActionTypes.ALL_VEHICLE_LIST,
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
