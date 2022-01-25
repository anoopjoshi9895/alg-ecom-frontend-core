export interface CartStateModel {
  isLoading: boolean
  cartID: number | undefined
  userID: number
  netPrice: number
  productBasePrice: number
  tplPrice: number
  registrationPrice: number
  productCurrency: string
  showroomID: number
  tradeIn: string
  productInfo: ProductInfoModelCart
  accessoriesInfo: AccessoriesModelCart[]
  insuranceDetails: InsurancesModelCart[]
  serviceDetails: ServicesModelCart[]
  financeDetails: FinanceModelCart[]
  tradeInDetails: TradeInModelCart[]
  configID?: number
  configurationID?: number
}
export interface ProductInfoModelCart {
  cartItemID: number
  productID: number
  productTitle: string
  saleslPrice: string
  offerPrice: string
  customOptionsInfo: CustomOptionsInfoModelCart[]
  combinationInfo: CombinationInfoModelCart[]
}
export interface CustomOptionsInfoModelCart {
  customOptionID: number
  customOptionName: string
  variantID: number
  variantName: string
  variantThumbImage: string
  priceDiff: number
}

export interface CombinationInfoModelCart {
  combinationID: number
  combinationSKU: string
  combinationPrice: number
  combinationMedia: CombinationMediaModelCart[]
  iFrameUrl?: string
}
export interface CombinationMediaModelCart {
  image: string
  imageType: string
  angle: string
  customOptionID: number
  customOptionName: string
}
export interface AccessoriesModelCart {
  productID: number
  cartItemId: string
  productTitle: string
  productImage: string
  salesPrice: number
  offerPrice: number
  itemSubtotal: number
  itemQuantity: number
  tintDetails: TintDetailsModelCart
}
export interface TintDetailsModelCart {
  tint_windshield: string | null
  tint_rear: string | null
  tint_row_1: string | null
  tint_row_2: string | null
  tint_row_3: string | null
}
export interface InsurancesModelCart {
  productID: number
  productTitle: string
  salesPrice: number
  cartItemID: number
  planDetails: PlanDetailsModelCart
}

export interface PlanDetailsModelCart {
  planYear: number
  planRate: number
  payType: string
  installments: number
  addons: AddonModelCart[]
}

export interface AddonModelCart {
  id: number
  price: number
}

export interface ServicesModelCart {
  productID: number
  productTitle: string
  salesPrice: number
}
export interface FinanceModelCart {
  term: number
  bankID: number
  monthlyPayment: number
  downPayment: number
  bankName: string
  interestRate: number
}
export interface TradeInModelCart {
  tradeInID: number
  modelYear: number
  brand: string
  modelCode: string
  trim: string
  mileage: number
}

export const initialProductInfoModelCart: ProductInfoModelCart = {
  cartItemID: 0,
  productID: 0,
  productTitle: '',
  saleslPrice: '',
  offerPrice: '',
  customOptionsInfo: [],
  combinationInfo: []
}
export const initialCartStateModelState: CartStateModel = {
  isLoading: true,
  cartID: undefined,
  userID: 0,
  netPrice: 0,
  productBasePrice: 0,
  tplPrice: 0,
  registrationPrice: 0,
  productCurrency: '',
  showroomID: 0,
  tradeIn: '',
  productInfo: initialProductInfoModelCart,
  accessoriesInfo: [],
  insuranceDetails: [],
  serviceDetails: [],
  financeDetails: [],
  tradeInDetails: [],
  configID: 0,
  configurationID: 0
}
