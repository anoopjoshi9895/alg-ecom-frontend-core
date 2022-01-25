// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';

// import {api} from '../api';

// action types

export interface CombinationDetailsStateModel {
  // isLoading: boolean;
  customoptionsList: CustomOptionsModelComb[]
  combinationInfo: CombinationModelComb[]
  isFound?: boolean
}

export interface CustomOptionsModelComb {
  customOptionID: number
  customOptionName: string
  helpText: string
  variants: CustomOptionsVarientModelComb[]
}
export interface CustomOptionsVarientModelComb {
  cutomOptionVariantID: number
  value: string
  variantThumbImage: string
  isDefault: number
  priceDiffType: string
  priceDiff: number
}

export interface CombinationModelComb {
  combinationID: number
  combinationHash: string
  combinationSKU: string
  combinationSalesPrice: number
  combinationOfferPrice: number
  offerPrice: number
  combinationPriceDiffType: string
  combinationVariants: string
  comboPriceDiff: number
  isDefault: string
  combinationMedia: CombinationMediaModelComb[]
  inventory: CombinationInventoryModel[]
  receiveDate: string
}

export interface CombinationInventoryModel {
  vinNumber: string
  locationCode: string
  status: string
  invStatus: string
  progressCode: string
}

export interface CombinationMediaModelComb {
  image: string
  imageType: string
  angle: string
  customOptionID: number
  customOptionName: string
}
