import { TradeInActionTypes } from './actionTypes';
import {initialStateTradeInTrimModel,TradeInTrimStateModel,
} from './trimViewModel';

export const tradeInMileageReducer = (
  state: TradeInTrimStateModel = initialStateTradeInTrimModel,
  action: any
): TradeInTrimStateModel => {
  switch (action.type) {
    case TradeInActionTypes.TRADEIN_TRIMS:
      return {
        isLoading: false,
        trimList: action.data ? action.data.trimList : state.trimList,
      };
    default:
      return state;
  }
};
