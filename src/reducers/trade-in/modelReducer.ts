import { TradeInActionTypes } from './actionTypes';
import {
  initialStateTradeInModel,
  TradeInModelStateModel,
} from './modelViewModel';

export const tradeInModelReducer = (
  state: TradeInModelStateModel = initialStateTradeInModel,
  action: any
): TradeInModelStateModel => {
  switch (action.type) {
    // login
    case TradeInActionTypes.TRADEIN_MODELS:
      return {
        isLoading: true,
        modelsList: action.data ? action.data.modelsList : state.modelsList,
      };
    default:
      return state;
  }
};
