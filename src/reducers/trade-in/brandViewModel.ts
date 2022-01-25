export interface TradeInBrandStateModel {
  isLoading: boolean;
  brandsList: TradeInBrandModel[];
}

export interface TradeInBrandModel {
  brandName: string;
}
export const initialStateTradeInBrandModel: TradeInBrandStateModel = {
  isLoading: false,
  brandsList: [],
};
export const tradeInBrandData: TradeInBrandStateModel = {
  isLoading: false,
  brandsList: [
    {
      brandName: 'CHEVROLET',
    },
    {
      brandName: 'FORD',
    },
  ],
};
