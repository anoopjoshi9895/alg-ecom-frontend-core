export interface TradeInTrimStateModel {
  isLoading: boolean;
  trimList: TradeInTrimModel[];
}

export interface TradeInTrimModel {
  trimList: string;
}
export const initialStateTradeInTrimModel: TradeInTrimStateModel = {
  isLoading: false,
  trimList: [],
};
