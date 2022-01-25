export interface FacebookUser {
  first_name: string
  last_name: string
  email: string
  birthday: string
  gender: string
  id: string
  userPhone: string
}

export interface User {
  userToken: string
  userFirstName: string
  userLastName: string
  userEmail: string
  userPhone: string
  userGender: string
  userDOB: Date
  profileImage: string
  userProfilePicture: string
  userDefaultLanguage: number
  userStatus: string
  verified: string
}

export interface UserConfiguration {
  configID: number
  productTitle: string
  trim: string
  addedDate: Date
  stage: number
  stageName: string
  Exterior: string
  Interior: string
  productID: number
  quoteNumber: string
  quoteExpiry: string
  orderTotalAmount: number
}
export interface UserOrder {
  masterOrderID: number
  orderNumber: string
  addedDate: Date
  productTitle: string
  vinNumber: number
  orderStatus: string
  paymentStatus: string
  trim: string
  Exterior: string
  Interior: string
  orderTotalAmount: number
  paidAmount: number
}

interface ServiceDetail {
  orderItemID: number
  productID: number
  productTitle: string
  salesPrice: number
}

interface AccessoriesInfo {
  orderItemID: number
  productID: number
  productTitle: string
  price: number
  salesPrice: number
}

export interface PlanDetailsModelConfig {
  planYear: number
  planRate: number
  payType: string
  installments: number
  addons: AddonModelConfig[]
}
export interface AddonModelConfig {
  id: number
  price: number
  addonName: string
}

interface InsuranceDetail {
  orderItemID: number
  productID: number
  productTitle: string
  salesPrice: number
  planDetails: PlanDetailsModelConfig
}

export interface UserOrderDetails {
  masterOrderID: number
  orderNumber: string
  addedDate: string
  productTitle: string
  vinNumber: number
  orderStatus: string
  paymentStatus: string
  trim: string
  modelYear: number
  model: string
  bodyType: string
  Exterior: string
  Interior: string
  orderTotalAmount: number
  paidAmount: number
  dueAmount: number
  basePrice: number
  paymentType: string
  transactionID: number
  userFirstName: string
  userLastName: string
  userEmail: string
  userPhone: string
  showroomName: string
  showroomLatitude?: any
  showroomLongitude?: any
  serviceDetails: ServiceDetail[]
  accessoriesInfo: AccessoriesInfo[]
  insuranceDetails: InsuranceDetail[]
  financeDetails: any[]
  tradeIn: string
  tradeInDetails: any[]
  tplAmount: number
  registrationAmount: number
  salesPrice: number
}

export interface UserBooking {
  masterOrderID: number
  orderNumber: string
  addedDate: Date
  productTitle: string
  vinNumber: number
  orderStatus: string
  paymentStatus: string
  trim: string
  Exterior: string
  Interior: string
  orderTotalAmount: number
  paidAmount: number
}

export interface UserConfigDetails {
  masterOrderID: number
  configID: number
  orderNumber: string
  addedDate: string
  productTitle: string
  vinNumber: number
  orderStatus: string
  paymentStatus: string
  trim: string
  modelYear: number
  model: string
  bodyType: string
  Exterior: string
  Interior: string
  orderTotalAmount: number
  paidAmount: number
  dueAmount: number
  basePrice: number
  paymentType: string
  transactionID: number
  userFirstName: string
  userLastName: string
  userEmail: string
  userPhone: string
  showroomName: string
  showroomLatitude?: any
  showroomLongitude?: any
  serviceDetails: ServiceDetail[]
  accessoriesInfo: AccessoriesInfo[]
  insuranceDetails: InsuranceDetail[]
  financeDetails: any[]
  tradeIn: string
  tradeInDetails: any[]
  tplAmount: number
  tplPrice: number
  registrationAmount: number
  registrationPrice: number
  salesPrice: number
}
