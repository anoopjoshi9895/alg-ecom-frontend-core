export interface TradeInModelStateModel {
  isLoading: boolean;
  modelsList: TradeInModelModel[];
}

export interface TradeInModelModel {
  modelCode: string;
}
export const initialStateTradeInModel: TradeInModelStateModel = {
  isLoading: false,
  modelsList: [],
};

export const tradeInModelData: TradeInModelStateModel = {
  isLoading: false,
  modelsList: [
    {
      modelCode: 'CHEVROLET',
    },
  ],
};
