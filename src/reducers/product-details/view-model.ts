// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';

// import {api} from '../api';

// action types

export interface ProductDetailsStateModel {
  isLoading: boolean
  productDetails: ProductViewModelBV | undefined
  accessories: AccessoriesModelBV[]
  servicesList: ServicesModelBV[]
  insurancesList: InsurancesModelBV[]
  maxDownPayment: number
  showroomsList: ShowRoomModelBV[]
  bankDetails: BankDetailsModelBV[]
  modelsList: ModelsListModelBV[]
}

export interface ProductViewModelBV {
  productID: number
  productTitle: string
  productDescription: string
  productImage: string
  previewImage: string
  bookingAmount: number
  salesPrice: number
  offerPrice: number
  productUrl: string
  productCurrency: string
  registrationPrice: number
  tplPrice: number
  brochure: string
  customoptionsList: CustomOptionsModel[]
  combinations: CombinationModel[]
}
export interface CustomOptionsModel {
  customOptionID: number
  customOptionName: string
  helpText: string
  variants: CustomOptionsVarientModel[]
  iFrameUrl?: string
}
export interface CustomOptionsVarientModel {
  cutomOptionVariantID: number
  value: string
  variantThumbImage: string
  isDefault: number
  priceDiffType: string
  priceDiff: number
}

export interface CombinationModel {
  combinationID: number
  combinationHash: string
  combinationSKU: string
  combinationSalesPrice: number
  combinationOfferPrice: number
  offerPrice: number
  combinationPriceDiffType: string
  comboPriceDiff: number
  isDefault: number
  combinationMedia: CombinationMediaModel[]
  iFrameUrl?: string
  inventory: InventoryModel[]
  receiveDate: string
  combinationVariants: string
}

export interface InventoryModel {
  vinNumber: string
  locationCode: string
  status: string
  invStatus: string
  progressCode: string
  receiveDate: string
}

export interface CombinationMediaModel {
  image: string
  imageType: string
  angle: string
  customOptionID: number
  customOptionName: string
}

export interface AccessoriesModelBV {
  productID: number
  productCategoryName: string
  productType: string
  productTitle: string
  productDescription: string
  productImage: string
  productPreviewImage: string
  salesPrice: number
  offerPrice: number
  productCurrency: string
  checkRows: string
  tintAvailable: string
  tintRows: number
}

export interface ServicesModelBV {
  productID: number
  productTitle: string
  productDescription: string
  offerPrice: number
  salesPrice: number
  productCurrency: string
  productImage: string
  productPreviewImage: string
  planFile: string
  file: string
  // featuresList: ServicesFeaturesModel[];
}
export interface ServicesFeaturesModel {
  feature: string
}
export interface InsurancesModelBV {
  productID: number
  productTitle: string
  salesPrice: number
  offerPrice: number
  minimumPremium: number
  planImage: string
  planRate: number
  planFile: string
  featuresList: InsurancesFeaturesModel[]
  planYears: InsurancesPlanYearModel[]
}

export interface InsurancesPlanYearModel {
  planRateID: number
  planID: number
  planYear: number
  planRate: number
  installments: number
  addons: InsurancesAddonModel[]
}

export interface InsurancesAddonModel {
  addonID: number
  addonPrice: number
  addonName: string
}

export interface InsurancesFeaturesModel {
  featureName: string
  featureValue: string
}
export interface ShowRoomModelBV {
  showroomID: number
  showroomName: string
}
export interface BankDetailsModelBV {
  bankID: number
  bankName: string
  annualInterestRate: number
  minimumTenure: number
  maximumTenure: number
  tenureIncValue: number
  minDownPayment: number
  maxDownPayment: number
  showRate: string
}
export interface ModelsListModelBV {
  modelYear: number
}
