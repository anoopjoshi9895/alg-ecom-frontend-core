// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';
import { Dispatch } from 'redux'

import { api } from '../api'
import { BannerItemModel } from './banners/ViewModel'
import { TrimVarientProductModel } from './trimVarients'

// action types
export const buildPriceTypes = {
  // product list
  PRODUCT_LIST: 'BUILD_PRICE/PRODUCT_LIST',
  PRODUCT_LIST_REQUEST: 'BUILD_PRICE/PRODUCT_LIST_REQUEST',
  PRODUCT_LIST_ERROR: 'BUILD_PRICE/PRODUCT_LIST_ERROR',

  MODEL_LIST: 'BUILD_PRICE/MODEL_LIST',
  MODEL_REQUEST: 'BUILD_PRICE/MODEL_REQUEST',
  MODEL_ERROR: 'BUILD_PRICE/MODEL_ERROR',

  BODY_TYPE_LIST: 'BUILD_PRICE/BODY_TYPE_LIST',
  BODY_TYPE_REQUEST: 'BUILD_PRICE/BODY_TYPE_REQUEST',
  BODY_TYPE_ERROR: 'BUILD_PRICE/BODY_TYPE_ERROR',

  PRODUCT_FILTER: 'BUILD_PRICE/PRODUCT_FILTER',

  BANNER_LIST: 'BUILD_PRICE/BANNER_LIST',
  BANNER_REQUEST: 'BUILD_PRICE/BANNER_REQUEST',
  BANNER_ERROR: 'BUILD_PRICE/BANNER_ERROR'
}

export interface ProductListDataModel {
  modelyear: number
  bodytype: string
  productsList: BuildPriceProductModel[]
  bodytypesList: BuildPriceBodyTypeModel[]
  modelsList?: BuildPriceModelsModel[]
  bodyTypeLoaded?: boolean
  bodyTypeLoading?: boolean
  bodyModelLoaded?: boolean
  bodyModelLoading?: boolean
  productLoaded?: boolean
  productLoading?: boolean
  bannerList?: BannerItemModel[]
  bannerLoaded?: boolean
  bannerLoading?: boolean
}

export interface BuildPriceBodyModelDataModel {
  bodytypesList: BuildPriceBodyTypeModel[]
  modelsList: BuildPriceModelsModel[]
}

export interface BuildPriceProductModel {
  productID: number
  productTitle: string
  productPrice: number
  productCurrency: string
  productImage: string
  previewImage: string
  modelCode: string
  products_model: TrimVarientProductModel[]
}

export interface BuildPriceBodyTypeModel {
  typeKey: string
  bodyType: string
}
// interface BuildPriceBodyTypeModel {
//   typeKey: string;
//   bodyType: string;
// }
export interface BuildPriceModelsModel {
  modelyear: number
}
// initial state
const initialState: ProductListDataModel = {
  modelyear: 0,
  bodytype: '',
  productsList: [],
  modelsList: [],
  bodytypesList: [],
  bodyModelLoaded: false,
  bodyModelLoading: false,
  productLoaded: false,
  productLoading: false
}

// reducer
export const buildPriceReducer = (
  state: ProductListDataModel = initialState,
  action: any
): ProductListDataModel => {
  switch (action.type) {
    // login

    case buildPriceTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        productLoaded: false,
        productLoading: true
      }
    case buildPriceTypes.PRODUCT_LIST_ERROR:
      return {
        ...state,
        productsList: [],
        productLoaded: true,
        productLoading: false
      }
    case buildPriceTypes.PRODUCT_LIST:
      return {
        ...state,
        productsList: action.data
          ? action.data?.productsList
          : state.productsList,
        modelyear: action.data ? action.data?.modelyear : state.modelyear,
        bodytype: action.data ? action.data?.bodytype : state.bodytype,
        productLoaded: true,
        productLoading: false
      }
    case buildPriceTypes.MODEL_LIST:
      return {
        ...state,
        modelsList: action.data ? action.data.modelsList : state.modelsList,
        bodyModelLoaded: true,
        bodyModelLoading: false
      }
    case buildPriceTypes.MODEL_ERROR:
      return {
        ...state,
        bodyModelLoaded: true,
        bodyModelLoading: false
      }
    case buildPriceTypes.MODEL_REQUEST:
      return {
        ...state,
        bodyModelLoaded: false,
        bodyModelLoading: true
      }

    case buildPriceTypes.BODY_TYPE_LIST:
      console.log('state', state)
      return {
        ...state,
        bodytypesList: action.data
          ? action.data.bodytypesList
          : state.bodytypesList,
        bodyTypeLoaded: true,
        bodyTypeLoading: false
      }
    case buildPriceTypes.BODY_TYPE_ERROR:
      return {
        ...state,
        bodyTypeLoaded: true,
        bodyTypeLoading: false
      }
    case buildPriceTypes.BODY_TYPE_REQUEST:
      return {
        ...state,
        bodyTypeLoaded: false,
        bodyTypeLoading: true
      }

    case buildPriceTypes.PRODUCT_FILTER:
      return {
        ...state,
        modelyear: action.modelyear,
        bodytype: action.bodytype
      }

    case buildPriceTypes.BANNER_LIST:
      return {
        ...state,
        bannerList: action.data ? action.data.bannerList : state.bannerList,
        bannerLoaded: true,
        bannerLoading: false
      }
    case buildPriceTypes.BANNER_ERROR:
      return {
        ...state,
        bannerLoaded: true,
        bannerLoading: false
      }
    case buildPriceTypes.BANNER_REQUEST:
      return {
        ...state,
        bannerLoaded: false,
        bannerLoading: true
      }

    default:
      return state
  }
}

// action creators & async actions
export const BuildPriceActions = {
  getProductList: (
    modelyear: number,
    bodytype: string,
    onSuccess?: () => void
  ) => async (dispatch: Dispatch) => {
    dispatch({ type: buildPriceTypes.PRODUCT_LIST_REQUEST })
    try {
      const response = await api.build.buildPriceProductList(
        modelyear,
        bodytype
      )

      dispatch({
        type: buildPriceTypes.PRODUCT_LIST,
        data: response
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({ type: buildPriceTypes.PRODUCT_LIST_ERROR, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },

  getModelList: (modelyear?: number) => async (dispatch: Dispatch) => {
    dispatch({ type: buildPriceTypes.MODEL_REQUEST })
    try {
      const response = await api.build.modelList(modelyear)

      dispatch({
        type: buildPriceTypes.MODEL_LIST,
        data: response
      })
    } catch (error) {
      dispatch({ type: buildPriceTypes.MODEL_ERROR, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },
  getBodyTypeList: (modelyear?: number) => async (dispatch: Dispatch) => {
    dispatch({ type: buildPriceTypes.BODY_TYPE_REQUEST })
    try {
      const response = await api.build.modelList(modelyear)

      dispatch({
        type: buildPriceTypes.BODY_TYPE_LIST,
        data: response
      })
    } catch (error) {
      dispatch({ type: buildPriceTypes.BODY_TYPE_ERROR, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },
  getBannerList: () => async (dispatch: Dispatch) => {
    dispatch({ type: buildPriceTypes.BANNER_REQUEST })
    try {
      const response = await api.build.bannerList()

      dispatch({
        type: buildPriceTypes.BANNER_LIST,
        data: response
      })
    } catch (error) {
      dispatch({ type: buildPriceTypes.BANNER_ERROR, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },

  updateFilter: (modelyear: number, bodytype: string) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });

    dispatch({
      type: buildPriceTypes.PRODUCT_FILTER,
      modelyear: modelyear,
      bodytype: bodytype
    })
  }
}
