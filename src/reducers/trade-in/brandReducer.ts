import { TradeInActionTypes } from './actionTypes';
import {
  initialStateTradeInBrandModel,
  TradeInBrandStateModel,
} from './brandViewModel';

export const tradeInBrandReducer = (
  state: TradeInBrandStateModel = initialStateTradeInBrandModel,
  action: any
): TradeInBrandStateModel => {
  switch (action.type) {
    // login
    case TradeInActionTypes.TRADEIN_BRANDS:
      return {
        isLoading: true,
        brandsList: action.data ? action.data.brandsList : state.brandsList,
      };
    default:
      return state;
  }
};
