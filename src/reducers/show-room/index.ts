import { Dispatch } from 'redux'
import { api } from '../../api'
import { ShowRoomListStateModel } from './ViewModel'
export * from './ViewModel'

// initial state
const initialState: ShowRoomListStateModel = {
  // isLoading: false,
  showroomsList: []
}

// reducer
export const showRoomListReducer = (
  state: ShowRoomListStateModel = initialState,
  action: any
): ShowRoomListStateModel => {
  switch (action.type) {
    // combination
    case showRoomListActionTypes.SHOWROOM_LIST:
      return {
        ...action.data,
      }
    

    default:
      return state
  }
}

export const showRoomListActionTypes = {
  // COMBINATION DETAILS
  SHOWROOM_LIST: 'SHOWROOM_LIST'
}

// action creators & async actions
export const showRoomListActions = {
  getShowRoomList: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.getShowRoomList()

      await dispatch({
        type: showRoomListActionTypes.SHOWROOM_LIST,
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
