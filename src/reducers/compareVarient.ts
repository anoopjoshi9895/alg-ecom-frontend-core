// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';
import { Dispatch } from 'redux';

// import {api} from '../api';

// action types
export const compareVarientActionTypes = {
  // compare varients
  COMPARE_VARIENTS: 'COMPARE/VARIENTS',
};

export interface CompareVarientsStateModel {
  // isLoading: boolean;
  productsList: CompareVarientProductModel[];
  attributesList: CompareAttributeViewModel[];
}

export interface CompareAttributeViewModel {
  attributeGroupName: string;
  attrOptions: AttributeItemModel[];
}
export interface CompareAttributeListItemViewModel {
  attributeGroupName: string;
}

export interface CompareVarientProductModel {
  productID: number;
  productTitle: string;
  productImage: string;
  salesPrice: number;
  offerPrice: number;
  productUrl: string;
  productCurrency: string;
  modelCode: string;
  attributes: CompareAttributeViewModel[];
}

export interface AttributeItemModel {
  attrName: string;
  attrOptValue: string;
}

// initial state
const initialState: CompareVarientsStateModel = {
  // isLoading: false,
  productsList: [],
  attributesList: [],
};

// reducer
export const compareVarientsReducer = (
  state: CompareVarientsStateModel = initialState,
  action: any
): CompareVarientsStateModel => {
  switch (action.type) {
    // login
    case compareVarientActionTypes.COMPARE_VARIENTS:
      return {
        isLoading: true,
        ...action.data,
      };
    default:
      return state;
  }
};

// action creators & async actions
export const CompareVarientActions = {
  getCompareVarients: (_: string, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      // const response = await api.build.buildPriceProductList(filters);
      dispatch({
        type: compareVarientActionTypes.COMPARE_VARIENTS,
        data: compareData,
        // data: response.data,
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch({ type: compareVarientActionTypes.COMPARE_VARIENTS, data: [] });
      // serializeAndShowFormErrors(error);
      throw error;
    }
  },
};

const compareData: CompareVarientsStateModel = {
  productsList: [
    {
      productID: 1,
      productTitle: 'CAMARO H72',
      productImage:
        'https://sariya.oorjit.net/alghanim-ecom/public/uploads/catalog/product/thumb/d/o/download__2030251747.jpg',
      salesPrice: 400,
      offerPrice: 1,
      productUrl: '2020-camaro-coupe-lt-v6-auto-t-m',
      productCurrency: 'KWD',
      modelCode: 'camaro',
      attributes: [
        {
          attributeGroupName: 'Exterior',
          attrOptions: [
            {
              attrName: 'Intermittent Front and Rear Wipers',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Rain Sensing Front Wipers',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Rear vision camera',
              attrOptValue: 'Standard',
            },
          ],
        },
        {
          attributeGroupName: 'Interior',
          attrOptions: [
            {
              attrName: 'Fold-flat second- and third-row seats',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Remote vehicle starter system',
              attrOptValue: 'Standard',
            },
          ],
        },
      ],
    },
    {
      productID: 2,
      productTitle: 'CAMARO H72',
      productImage:
        'https://sariya.oorjit.net/alghanim-ecom/public/uploads/catalog/product/thumb/2/5/25360346148__1182340892.jpg',
      salesPrice: 3000,
      offerPrice: 1,
      productUrl: '2020-camaro-coupe-2lt-v6-auto-t-m-full-option-leather',
      productCurrency: 'KWD',
      modelCode: 'camaro',
      attributes: [
        {
          attributeGroupName: 'Exterior',
          attrOptions: [
            {
              attrName: 'Intermittent Front and Rear Wipers',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Rain Sensing Front Wipers',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Rear vision camera',
              attrOptValue: 'Standard',
            },
          ],
        },
        {
          attributeGroupName: 'Interior',
          attrOptions: [
            {
              attrName: 'Fold-flat second- and third-row seats',
              attrOptValue: 'Standard',
            },
            {
              attrName: 'Remote vehicle starter system',
              attrOptValue: 'Standard',
            },
          ],
        },
      ],
    },
  ],
  attributesList: [
    {
      attributeGroupName: 'Exterior',
      attrOptions: [
        {
          attrName: 'Intermittent Front and Rear Wipers',
          attrOptValue: 'Standard',
        },
        {
          attrName: 'Rain Sensing Front Wipers',
          attrOptValue: 'Standard',
        },
        {
          attrName: 'Rear vision camera',
          attrOptValue: 'Standard',
        },
      ],
    },
    {
      attributeGroupName: 'Interior',
      attrOptions: [
        {
          attrName: 'Fold-flat second- and third-row seats',
          attrOptValue: 'Standard',
        },
        {
          attrName: 'Remote vehicle starter system',
          attrOptValue: 'Standard',
        },
      ],
    },
  ],
};
