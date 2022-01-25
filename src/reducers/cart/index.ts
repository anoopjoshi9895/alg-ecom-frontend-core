import cloneDeep from 'lodash/cloneDeep'
import { Dispatch } from 'redux'
import { api } from '../../api'
import {
  CombinationDetailsStateModel,
  CustomOptionsVarientModelComb
} from '../combination-details/ViewModel'
import {
  CartStateModel,
  CombinationInfoModelCart,
  CustomOptionsInfoModelCart,
  initialCartStateModelState
} from './ViewModel'
export * from './ViewModel'

export const cartActionTypes = {
  // product list
  UPDATE_CART: 'CART/UPDATE',
  GET_CART: 'CART/GET',
  CLEAR_CART: 'CART/CLEAR',
  UPDATE_BASE_PRICE: 'CART/UPDATE_BASE_PRICE',
  UPDATE_DEFAULT_INTERIOR: 'CART/UPDATE_DEFAULT_INTERIOR',
  UPDATE_COMBINATION_PRICE: 'CART/UPDATE_COMBINATION_PRICE',
  UPDATE_CART_PRODUCT_ID: 'CART/UPDATE_CART_PRODUCT_ID',
  UPDATE_SHOW_ROOMID: 'CART/UPDATE_SHOW_ROOMID'
}

// reducer
export const cartReducer = (
  state: CartStateModel = initialCartStateModelState,
  action: any
): CartStateModel => {
  switch (action.type) {
    // login
    case cartActionTypes.CLEAR_CART:
      return {
        ...action.data,
        isLoading: true
      }

    case cartActionTypes.UPDATE_CART:
      return {
        ...action.data,
        isLoading: true,
        configurationID: null
      }
    case cartActionTypes.GET_CART:
      return {
        ...action.data,
        configurationID: action.configID,
        isLoading: true
      }
    case cartActionTypes.UPDATE_SHOW_ROOMID:
      return {
        ...state,
        showroomID: action.data,
        isLoading: true
      }
    case cartActionTypes.UPDATE_BASE_PRICE:
      return {
        ...action.data,
        isLoading: true
      }
    case cartActionTypes.UPDATE_DEFAULT_INTERIOR:
      const combinationData: CombinationDetailsStateModel = action.data
      const cartInteriorDataIndex = state.productInfo.customOptionsInfo.findIndex(
        (item) => item.customOptionName.toUpperCase() === 'INTERIOR'
      )
      const stateData: CartStateModel = cloneDeep(state)
      if (combinationData?.customoptionsList?.length > 0) {
        const combInteriorData = combinationData?.customoptionsList[0].variants.find(
          (item: any) => item.isDefault === 1
        )
        if (combInteriorData) {
          const cartInteriorData = getCartCustOption(
            combInteriorData,
            combinationData.customoptionsList[0].customOptionID,
            combinationData.customoptionsList[0].customOptionName
          )
          if (cartInteriorDataIndex >= 0) {
            stateData.productInfo.customOptionsInfo.splice(
              cartInteriorDataIndex,
              1,
              cartInteriorData
            )
          } else {
            stateData.productInfo.customOptionsInfo.push(cartInteriorData)
          }
        }
      }
      if (
        combinationData?.combinationInfo &&
        combinationData?.combinationInfo?.length > 0
      ) {
        const combData = combinationData.combinationInfo[0]
        const cartCombination: CombinationInfoModelCart = {
          combinationID: 0,
          combinationSKU: '',
          combinationPrice: 0,
          combinationMedia: []
        }

        cartCombination.combinationID = combData.combinationID
        cartCombination.combinationSKU = combData.combinationSKU
        cartCombination.combinationPrice = combData.combinationSalesPrice
        cartCombination.combinationMedia = combData.combinationMedia
        stateData.netPrice =
          stateData.tplPrice +
          stateData.registrationPrice +
          combData.combinationOfferPrice

        stateData.productInfo.combinationInfo = [cartCombination]
      } else {
        stateData.productInfo.combinationInfo = []
      }
      return stateData
    case cartActionTypes.UPDATE_COMBINATION_PRICE:
      const combinationData1: CombinationDetailsStateModel = action.data
      // let cartInteriorDataIndex1 = state.productInfo.customOptionsInfo.findIndex(
      //   (item) => item.customOptionName.toUpperCase() === 'INTERIOR'
      // );
      const stateData1: CartStateModel = cloneDeep(state)

      if (combinationData1?.combinationInfo?.length > 0) {
        const combData = combinationData1.combinationInfo[0]
        const cartCombination: CombinationInfoModelCart = {
          combinationID: 0,
          combinationSKU: '',
          combinationPrice: 0,
          combinationMedia: []
        }

        cartCombination.combinationID = combData.combinationID
        cartCombination.combinationSKU = combData.combinationSKU
        cartCombination.combinationPrice = combData.combinationOfferPrice
        cartCombination.combinationMedia = combData.combinationMedia
        stateData1.netPrice =
          stateData1.tplPrice +
          stateData1.registrationPrice +
          combData.combinationOfferPrice
        stateData1.productInfo.combinationInfo = [cartCombination]
      }
      return stateData1
    case cartActionTypes.UPDATE_CART_PRODUCT_ID:
      const stateData2: CartStateModel = cloneDeep(state)
      // stateData2.productInfo.productID = action.data?.productID;
      return stateData2
    default:
      return state
  }
}
const getCartCustOption = (
  item: CustomOptionsVarientModelComb,
  customOptionId: any,
  customOptionName: string
) => {
  const custOption: CustomOptionsInfoModelCart = {
    customOptionID: 0,
    customOptionName: '',
    variantID: 0,
    variantName: '',
    variantThumbImage: '',
    priceDiff: 0
  }
  custOption.variantID = item.cutomOptionVariantID
  custOption.variantThumbImage = item.variantThumbImage
  custOption.variantName = item.value
  custOption.customOptionID = customOptionId
  custOption.customOptionName = customOptionName
  custOption.priceDiff = item.priceDiff
  return custOption
}

// action creators & async actions
export const CartActions = {
  clearCart: (onSuccess?: () => void) => async (dispatch: Dispatch) => {
    dispatch({
      type: cartActionTypes.UPDATE_CART,
      data: cloneDeep(initialCartStateModelState)
    })
    if (onSuccess) {
      onSuccess()
    }
  },
  updateShowRoomId: (id: number) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });

    try {
      // cart.netPrice = getBasePrice(cart);
      dispatch({
        type: cartActionTypes.UPDATE_SHOW_ROOMID,
        data: id
        // data: response.data,
      })
    } catch (error) {
      // serializeAndShowFormErrors(error);
      throw error
    }
  },
  addToCart: (cart: CartStateModel, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });

    try {
      // cart.netPrice = getBasePrice(cart);
      dispatch({
        type: cartActionTypes.UPDATE_CART,
        data: cart
        // data: response.data,
      })
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({ type: cartActionTypes.UPDATE_CART, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  },
  getCartDetails: (
    cartId?: number,
    configID?: number,
    onSuccess?: () => void
  ) => async (dispatch: Dispatch) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });

    try {
      const response = await api.build.getCartDetails(cartId, configID)
      // cart.netPrice = getBasePrice(cart);
      if (response?.meta?.responsecode === 200) {
        dispatch({
          type: cartActionTypes.GET_CART,
          data: response?.data,
          configID
          // data: response.data,
        })
      } else {
      }

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({ type: cartActionTypes.UPDATE_CART, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}

// const getBasePrice = (cart: CartStateModel) => {
//   let price = 0;
//   price = cart.productBasePrice;
//   price = cart?.productInfo?.combinationInfo[0]?.combinationPrice;
//   cart?.accessoriesInfo?.forEach((item) => {
//     price += item.salesPrice;
//   });
//   cart?.insuranceDetails?.forEach((item) => {
//     price += item.salesPrice;
//   });
//   cart?.serviceDetails?.forEach((item) => {
//     price += item.salesPrice;
//   });
//   return price;
// };
