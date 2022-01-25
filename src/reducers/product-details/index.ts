import { cloneDeep } from 'lodash'
import { Dispatch } from 'redux'
import { api } from '../../api'
import { combinationDetailsActionTypes } from '../combination-details'
import { ProductDetailsStateModel } from './view-model'
export * from './view-model'
// initial state
const initialState: ProductDetailsStateModel = {
  isLoading: false,
  productDetails: undefined,
  accessories: [],
  servicesList: [],
  insurancesList: [],
  maxDownPayment: 0,
  showroomsList: [],
  bankDetails: [],
  modelsList: []
}

// reducer
export const productDetailsReducer = (
  state: ProductDetailsStateModel = initialState,
  action: any
): ProductDetailsStateModel => {
  switch (action.type) {
    // login
    case productDetailsActionTypes.PRODUCT_DETAILS:
      return {
        isLoading: true,
        ...action.data
      }
    default:
      return state
  }
}

export const productDetailsActionTypes = {
  // PRDUCT DETAILS
  PRODUCT_DETAILS: 'PRODUCT_DETAILS',
  PRODUCT_DETAILS_CLEAR: 'PRODUCT_DETAILS_CLEAR'
}

// action creators & async actions
export const ProductDetailsActions = {
  clearProductDetails: () => async (dispatch: Dispatch) => {
    try {
      console.log(
        'productDetailsActionTypes.PRODUCT_DETAILS_CLEAR',
        initialState
      )
      dispatch({
        type: productDetailsActionTypes.PRODUCT_DETAILS_CLEAR,
        data: cloneDeep(initialState)
      })
    } catch (error) {
      dispatch({ type: productDetailsActionTypes.PRODUCT_DETAILS, data: [] })
      throw error
    }
  },
  getProductDetails: (id: number, onSuccess?: () => void) => async (
    dispatch: Dispatch
  ) => {
    // dispatch({ type: types.GET_COURSES_REQUEST });
    try {
      const response = await api.build.buildPriceProductDetails(id)
      dispatch({
        type: productDetailsActionTypes.PRODUCT_DETAILS,
        data: response
      })
      dispatch({
        type: combinationDetailsActionTypes.COMBINATION_DETAILS,
        data: {
          customoptionsList: response?.productDetails?.customoptionsList,
          combinationInfo: response?.productDetails?.combinations
        }
      })
      // let productInfo = {
      //   cartItemID: 0,
      //   productID: 0,
      //   productTitle: '',
      //   saleslPrice: '',
      //   offerPrice: '',
      //   customOptionsInfo: [],
      //   combinationInfo: [],
      // };
      // dispatch({
      //   type: cartActionTypes.UPDATE_CART_PRODUCT_ID,
      //   data: {
      //     productID: response?.productDetails?.productID,
      //   },
      // });
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      dispatch({ type: productDetailsActionTypes.PRODUCT_DETAILS, data: [] })
      // serializeAndShowFormErrors(error);
      throw error
    }
  }
}

// const compareData: ProductDetailsStateModel = {
//   isLoading: false,
//   productDetails: {
//     productID: 1,
//     productTitle: 'TAHOE LS 1',
//     productDescription: 'Description about product',
//     productImage: 'path / product_image.jpg',
//     previewImage: 'path / preview_image.jpg',
//     salesPrice: 12999,
//     offerPrice: 12999,
//     productUrl: 'tahow - ls - 1',
//     productCurrency: 'KWD',
//     registrationPrice: '14',
//     tplPrice: 13,
//     brochure: 'vehicle brochure file',
//     customoptionsList: [
//       {
//         customOptionID: 1,
//         customOptionName: 'Exterior',
//         helpText: 'Choose Your Exterior color',
//         variants: [
//           {
//             cutomOptionVariantID: 1,
//             value: 'Black',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 1,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 2,
//             value: 'Brown',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 3,
//             value: 'Brown',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 4,
//             value: 'Brown',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 5,
//             value: 'Brown',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 6,
//             value: 'Brown',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 7,
//             value: 'Ash',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//         ],
//       },
//       {
//         customOptionID: 2,
//         customOptionName: 'Interior',
//         helpText: 'Choose Your Interior color',
//         variants: [
//           {
//             cutomOptionVariantID: 4353534,
//             value: 'Cocoa/­Dune, Premium Cloth seat trim 1',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 1,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//           {
//             cutomOptionVariantID: 34242342,
//             value: 'Cocoa/­Dune, Premium Cloth seat trim 2',
//             variantThumbImage: 'variant thumb image',
//             isDefault: 0,
//             priceDiffType: 'inc',
//             priceDiff: 999,
//           },
//         ],
//       },
//     ],
//     combinations: [
//       {
//         combinationID: 46,
//         combinationHash: '76655656',
//         combinationSKU: 'EXTWHITEINTWHITE',
//         combinationSalesPrice: 15999,
//         combinationOfferPrice: 15999,
//         offerPrice: 14999,
//         combinationPriceDiffType: 'inc',
//         isDefault: 1,
//         combinationMedia: [
//           {
//             image: 'path / image.jpg ',
//             imageType: 'Ext',
//             angle: '180',
//           },
//         ],
//       },
//     ],
//   },
//   accessories: [
//     {
//       productID: 1,
//       productCategoryName: 'Exterior',
//       productType: 'Genuine',
//       productTitle: 'Alloy Wheel',
//       productDescription: 'Description',
//       productImage: 'path / product_image.jpg',
//       productPreviewImage: 'path / product_image.jpg',
//       salesPrice: 12999,
//       offerPrice: 12999,
//       productCurrency: 'KWD',
//     },
//     {
//       productID: 2,
//       productCategoryName: 'Interior',
//       productType: 'Genuine',
//       productTitle: 'Floor Mats',
//       productDescription: 'Description',
//       productImage: 'path / product_image.jpg',
//       productPreviewImage: 'path / product_image.jpg',
//       salesPrice: 12999,
//       offerPrice: 12999,
//       productCurrency: 'KWD',
//     },
//     {
//       productID: 3,
//       productCategoryName: 'Electronics',
//       productType: 'Genuine',
//       productTitle: 'Woofer',
//       productDescription: 'Description',
//       productImage: 'path / product_image.jpg',
//       productPreviewImage: 'path / product_image.jpg',
//       salesPrice: 12999,
//       offerPrice: 12999,
//       productCurrency: 'KWD',
//     },
//     {
//       productID: 4,
//       productCategoryName: 'Performance',
//       productType: 'Genuine',
//       productTitle: 'Speed acc',
//       productDescription: 'Description',
//       productImage: 'path / product_image.jpg',
//       productPreviewImage: 'path / product_image.jpg',
//       salesPrice: 12999,
//       offerPrice: 12999,
//       productCurrency: 'KWD',
//     },
//   ],
//   servicesList: [
//     {
//       serviceID: 1,
//       packageTitle: '3 year plan',
//       packageListPrice: 5999,
//       packageSalesPrice: 4999,
//       packageImage: 'path/image.jpg',
//       file: 'path/file.doc',
//       featuresList: [
//         {
//           feature: '50000 kms',
//         },
//         {
//           feature: 'Engine oil change',
//         },
//       ],
//     },
//     {
//       serviceID: 2,
//       packageTitle: '5 year plan',
//       packageListPrice: 7999,
//       packageSalesPrice: 6999,
//       packageImage: 'path/image.jpg',
//       file: 'path/file.doc',
//       featuresList: [
//         {
//           feature: '50000 kms',
//         },
//         {
//           feature: 'Engine oil change',
//         },
//       ],
//     },
//   ],
//   insurancesList: [
//     {
//       productID: 1,
//       productTitle: 'Silver',
//       salesPrice: 5999,
//       minimumPremium: 999,
//       planImage: 'assets/images/insurance-services/silver.png',
//       planFile: 'path/file.doc',
//       featuresList: [
//         {
//           fetaureName: 'Rate1',
//           featureValue: 'Enaya Tariff',
//         },
//       ],
//     },
//     {
//       productID: 2,
//       productTitle: 'Gold',
//       salesPrice: 6999,
//       minimumPremium: 1999,
//       planImage: 'assets/images/insurance-services/gold.png',
//       planFile: 'path/file.doc',
//       featuresList: [
//         {
//           fetaureName: 'Rate2',
//           featureValue: 'Enaya Tariff',
//         },
//       ],
//     },
//     {
//       productID: 3,
//       productTitle: 'Diamond',
//       salesPrice: 7999,
//       minimumPremium: 999,
//       planImage: 'assets/images/insurance-services/diamond.png',
//       planFile: 'path/file.doc',
//       featuresList: [
//         {
//           fetaureName: 'Rate3',
//           featureValue: 'Enaya Tariff',
//         },
//       ],
//     },
//   ],
//   showroomsList: [
//     {
//       showroomID: 1,
//       showroomName: 'Saft Al Rai',
//     },
//   ],
//   bankDetails: [
//     {
//       bankID: 1,
//       bankName: 'Al Amana Finance',
//       annualInterestRate: 10,
//       minimumTenure: 20,
//       maximumTenure: 100,
//       tenureIncValue: 10,
//       minDownPayment: 1000,
//       maxDownPayment: 5000,
//     },
//   ],
//   modelsList: [
//     {
//       modelYear: 2019,
//     },
//     {
//       modelYear: 2020,
//     },
//   ],
// };
