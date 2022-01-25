import { TradeInActionTypes } from './actionTypes';

import {
  initialStateTradeInModelYear,
  TradeInModelYearStateModel,
} from './modelYearViewModel';

export const tradeInModelYearReducer = (
  state: TradeInModelYearStateModel = initialStateTradeInModelYear,
  action: any
): TradeInModelYearStateModel => {
  switch (action.type) {
    // login
    case TradeInActionTypes.TRADEIN_MODEL_YEAR:
      return {
        isLoading: true,
        modelsYears: action.data ? action.data : state.modelsYears,
      };
    default:
      return state;
  }
};
