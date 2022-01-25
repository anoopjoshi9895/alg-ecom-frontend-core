// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';
import { Dispatch } from 'redux'

// import {api} from '../api';

// action types
export const trimVarientActionTypes = {
  // product varients
  PRODUCT_VARIENTS: 'TRIM/VARIENTS'
}

export interface TrimVarientsStateModel {
  isLoading: boolean
  data: TrimVarientDataViewModel
}

export interface TrimVarientDataViewModel {
  pageTitle: string
  productsList: TrimVarientProductModel[]
}

export interface TrimVarientProductModel {
  productID: number
  productTitle: string
  productDescription: string
  productShortDescription: string
  productImage: string
  previewImage: string
  salesPrice: number
  offerPrice: number
  productUrl: string
  productCurrency: string
  productModel: string
  bodyType: string
  trimCode: string
  productMedia: TrimVarientProductMedia[]
  iFrameUrl?: string
  isAvailable: string
}

export interface TrimVarientProductMedia {
  Image: string
  Imagetype: string
  Angle: string
}

// initial state
const initialState: TrimVarientsStateModel = {
  isLoading: false,
  data: {
    pageTitle: '',
    productsList: []
  }
}

// reducer
export const trimVarientsReducer = (
  state: TrimVarientsStateModel = initialState,
  action: any
): TrimVarientsStateModel => {
  switch (action.type) {
    // login
    case trimVarientActionTypes.PRODUCT_VARIENTS:
      return {
        ...state,
        isLoading: true,
        data: action.data ? action.data : state.data
      }
    default:
      return state
  }
}

// action creators & async actions
export const TrimVarientActions = {
  getTrimVarients: (_: string, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      // const response = await api.build.buildPriceProductList(filters);
      dispatch({
        type: trimVarientActionTypes.PRODUCT_VARIENTS,
        data: {
          page_title: '2020 Tahova',
          products_list: products
        }
        // data: response.data,
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({ type: trimVarientActionTypes.PRODUCT_VARIENTS, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}

const products = [
  {
    productId: '1',
    productTitle: 'TAHOE LS 1',
    productDescription: 'About product',
    productImage: 'path/product_image.jpg',
    previewImage: 'path/preview_image.jpg',
    salesPrice: '12,999',
    offerPrice: '12,999',
    productUrl: 'tahow-ls-1',
    productCurrency: 'KWD',
    productModel: 'TAHOE',
    bodyType: 'LS',
    productMedia: [
      {
        Image: 'path/image.jpg',
        Angle: '180'
      }
    ]
  },
  {
    productId: '2',
    productTitle: 'TAHOE LS 2',
    productDescription: 'About product',
    productImage: 'path/product_image.jpg',
    previewImage: 'path/preview_image.jpg',
    salesPrice: '12,999',
    offerPrice: '12,999',
    productUrl: 'tahow-ls-1',
    productCurrency: 'KWD',
    productModel: 'TAHOE',
    bodyType: 'LS',
    productMedia: [
      {
        Image: 'path/image.jpg',
        Angle: '180'
      }
    ]
  },
  {
    productId: '3',
    productTitle: 'TAHOE LS 3',
    productDescription: 'About product',
    productImage: 'path/product_image.jpg',
    previewImage: 'path/preview_image.jpg',
    salesPrice: '12,999',
    offerPrice: '12,999',
    productUrl: 'tahow-ls-1',
    productCurrency: 'KWD',
    productModel: 'TAHOE',
    bodyType: 'LS',
    productMedia: [
      {
        Image: 'path/image.jpg',
        Angle: '180'
      }
    ]
  },
  {
    productId: '4',
    productTitle: 'TAHOE LS 4',
    productDescription: 'About product',
    productImage: 'path/product_image.jpg',
    previewImage: 'path/preview_image.jpg',
    salesPrice: '12,999',
    offerPrice: '12,999',
    productUrl: 'tahow-ls-1',
    productCurrency: 'KWD',
    productModel: 'TAHOE',
    bodyType: 'LS',
    productMedia: [
      {
        Image: 'path/image.jpg',
        Angle: '180'
      }
    ]
  },
  {
    productId: '5',
    productTitle: 'TAHOE LS 5',
    productDescription: 'About product',
    productImage: 'path/product_image.jpg',
    previewImage: 'path/preview_image.jpg',
    salesPrice: '12,999',
    offerPrice: '12,999',
    productUrl: 'tahow-ls-1',
    productCurrency: 'KWD',
    productModel: 'TAHOE',
    bodyType: 'LS',
    productMedia: [
      {
        Image: 'path/image.jpg',
        Angle: '180'
      }
    ]
  }
]
