import { Dispatch } from 'redux';
import { api } from '../../api';
import { TradeInActionTypes } from './actionTypes';

export const TradeInActions = {
  getModelYearList: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.tradeInModelYearList();
      dispatch({
        type: TradeInActionTypes.TRADEIN_MODEL_YEAR,
        data: response,
        // data: response.data,
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: TradeInActionTypes.TRADEIN_BRANDS, data: [] });
      // serializeAndShowFormErrors(error);
      throw error;
    }
  },
  getBrandList: (year: number, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.tradeInBrandList(year);
      dispatch({
        type: TradeInActionTypes.TRADEIN_BRANDS,
        data: response,
        // data: response.data,
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: TradeInActionTypes.TRADEIN_BRANDS, data: [] });
      // serializeAndShowFormErrors(error);
      throw error;
    }
  },
  getModelList: (year: number, brand: string, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    try {
      const response = await api.build.tradeInModelList(year, brand);
      dispatch({
        type: TradeInActionTypes.TRADEIN_MODELS,
        data: response,
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: TradeInActionTypes.TRADEIN_MODELS, data: {} });
      // serializeAndShowFormErrors(error);
      throw error;
    }
  },
  getTrimList: (
    modelyear: number,
    brand: string,
    modelCode: string,
    onSuccess?: () => void
  ) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.tradeInTrimList(
        modelyear,
        brand,
        modelCode
      );
      dispatch({
        type: TradeInActionTypes.TRADEIN_TRIMS,
        data: response,
        // data: response.data,
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: TradeInActionTypes.TRADEIN_TRIMS, data: {} });
      // serializeAndShowFormErrors(error);
      throw error;
    }
  },
};
