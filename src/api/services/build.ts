import { CartStateModel } from '../../reducers/cart/ViewModel'
import { EditionVarientProductModel } from '../../reducers/editionVarient'
import { TrimVarientProductModel } from '../../reducers/trimVarients'
import * as http from './http'
import ApiService from './service'

export default class BuildService extends ApiService {
  public async tradeInModelYearList() {
    let url = `${this.apiDomain}mobileapp/product/listyear`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.result
  }
  public async tradeInBrandList(modelyear?: number) {
    let url = `${this.apiDomain}mobileapp/product/brands/modelyear/${modelyear}/`
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async tradeInModelList(modelyear: number, brand: string) {
    const resposne = await http.get(
      `${this.apiDomain}mobileapp/product/models/modelyear/${modelyear}/brand/${brand}`,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async tradeInTrimList(
    modelyear: number,
    brand: string,
    modelCode: string
  ) {
    const resposne = await http.get(
      `${this.apiDomain}mobileapp/product/trim/modelyear/${modelyear}/brand/${brand}/model/${modelCode}`,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async modelList(modelyear?: number) {
    let url = `${this.apiDomain}mobileapp/index/modelslist/`
    if (modelyear) {
      url += `modelyear/${modelyear}/`
    }
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async buildPriceProductList(modelyear?: number, bodytype?: string) {
    let url = `${this.apiDomain}mobileapp/index/products/`
    if (modelyear) {
      url += `modelyear/${modelyear}/`
    }
    if (bodytype && bodytype !== 'All') {
      url += `bodytype/${bodytype}/`
    }
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async buildPriceProductDetails(productId: number) {
    let url = `${this.apiDomain}mobileapp/product/id/${productId}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async bannerList() {
    let url = `${this.apiDomain}mobileapp/index/banners/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async trimList(modelyear: number, model: string) {
    let url = `${this.apiDomain}mobileapp/catalog/index/`
    url += `modelyear/${modelyear}/model/${model}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async trimWiseList(
    modelyear: number,
    model: string,
    trimCode: string
  ) {
    let url = `${this.apiDomain}mobileapp/catalog/index/`
    url += `modelyear/${modelyear}/model/${model}/trimcode/${trimCode}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }

  public async trimCompareData(
    modelyear: number,
    model: string,
    products: TrimVarientProductModel[]
  ) {
    let url = `${this.apiDomain}mobileapp/catalog/compare/`
    url += `modelyear/${modelyear}/model/${model}/`
    let prodData: number[] = []
    var postData = new FormData()
    products.forEach((product) => {
      prodData.push(product.productID)
    })
    postData.append('products', JSON.stringify(prodData))
    // let postData = http.jsonToFormData({ products: [1, 2] });
    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      'multipart/form-data'
    )
    return {
      productsList: resposne?.data?.data?.productsList,
      attributesList: resposne?.data?.data?.attributesList
    }
  }
  public async editionCompareData(
    modelyear: number,
    model: string,
    products: EditionVarientProductModel[]
  ) {
    let url = `${this.apiDomain}mobileapp/catalog/compare/`
    url += `modelyear/${modelyear}/model/${model}/`
    let prodData: number[] = []
    var postData = new FormData()
    products.forEach((product) => {
      prodData.push(product.productID)
    })
    postData.append('products', JSON.stringify(prodData))
    // let postData = http.jsonToFormData({ products: [1, 2] });
    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      'multipart/form-data'
    )
    return {
      productsList: resposne?.data?.data?.productsList,
      attributesList: resposne?.data?.data?.attributesList
    }
  }

  public async getCombinationVariants(
    productId: number,
    customOptionID: number,
    cutomOptionVariantID: number
  ) {
    let url = `${this.apiDomain}mobileapp/product/getcombination/id/${productId}/customOptionID/${customOptionID}/cutomOptionVariantID/${cutomOptionVariantID}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async getCombinationPrice(
    productId: number,
    customExteriorID: number,
    cutomExteriorVariantID: number,
    customInteriorID: number,
    cutomInteriorVariantID: number
  ) {
    let url = `${this.apiDomain}mobileapp/product/getCombinationPrice/id/${productId}/customOptionIDs/${customExteriorID}-${customInteriorID}/cutomOptionVariantIDs/${cutomExteriorVariantID}-${cutomInteriorVariantID}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async createCart(productID: number, data: CartStateModel) {
    let url = `${this.apiDomain}mobileapp/cart/createcart/`
    var postData = getCreateCartPostData(productID, data)
    try {
    } catch (error) {}
    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID
      // 'multipart/form-data'
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        status: 'Success',
        responsecode: resposne.data?.meta?.responsecode,
        message: ''
      }
    } else {
      return {
        data: undefined,
        status: 'Failed',
        responsecode: resposne.data?.meta?.responsecode,
        message: resposne.data?.meta?.message
      }
    }
  }
  public async getCartDetails(cartId?: number, configID?: number) {
    let url = `${this.apiDomain}mobileapp/cart/getcart`
    if (cartId) {
      url = url + `/cartID/${cartId}`
    }
    if (configID) {
      url = url + `/configID/${configID}`
    }

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    return resposne?.data
  }
  public async updateCart(productID: number, data: CartStateModel) {
    let url = `${this.apiDomain}mobileapp/cart/updatecart/`
    var postData = getUpdateCartPostData(productID, data)
    postData.saveConfig = 'No'

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      undefined,
      this.token
      // 'multipart/form-data'
    )

    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        status: 'Success',
        responsecode: resposne.data?.meta?.responsecode,
        message: ''
      }
    } else {
      return {
        data: undefined,
        status: 'Failed',
        responsecode: resposne.data?.meta?.responsecode,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async saveConfig(
    productID: number,
    data: CartStateModel,
    configInsert?: string
  ) {
    let url = `${this.apiDomain}mobileapp/cart/updatecart/`
    var postData = getUpdateCartPostData(productID, data)
    postData.saveConfig = 'Yes'

    if (configInsert && data.configID) {
      postData.configInsert = configInsert
      if (configInsert === 'No') {
        postData.configID = data.configID
      }
    }

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      undefined,
      this.token
      // 'multipart/form-data'
    )

    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        status: 'Success',
        responsecode: resposne.data?.meta?.responsecode,
        message: ''
      }
    } else {
      return {
        data: undefined,
        status: 'Failed',
        responsecode: resposne.data?.meta?.responsecode,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async createOnlineOrder(data: any) {
    let url = `${this.apiDomain}mobileapp/cart/payment/`

    const resposne = await http.post(
      url,
      data,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      undefined,
      this.token
      // 'multipart/form-data'
    )

    if (resposne.data?.meta?.status === 'Success') {
      return {
        data: resposne?.data?.data,
        status: resposne.data?.meta?.status,
        message: ''
      }
    } else {
      return {
        data: undefined,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }
  public async getBankList() {
    let url = `${this.apiDomain}mobileapp/index/listfinance`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async getShowRoomList() {
    let url = `${this.apiDomain}mobileapp/index/showRooms/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async verifyOrder(orderNo: string, refNo: string) {
    let url = `${this.apiDomain}mobileapp/cart/verifyOrder/order_no/${orderNo}/`
    if (refNo != '') {
      url += `reference_number/${refNo}/`
    }
    // try {
    //   const resposne = await http.get(
    //   url,
    //   this.languageID,
    //   this.websiteID,
    //   this.subsiteID
    // );
    // return resposne?.data;

    // } catch (error) {
    //   return error?.response?.data
    // }
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    return resposne?.data?.data
  }
  public async getOrderDetails(orderNo: string, refNo: string) {
    let url = `${this.apiDomain}mobileapp/cart/getOrder/order_no/${orderNo}/`
    if (refNo != '') {
      url += `reference_number/${refNo}/`
    }
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    return resposne?.data?.data
    // try {
    //   const resposne = await http.get(
    //   url,
    //   this.languageID,
    //   this.websiteID,
    //   this.subsiteID
    // );
    // return resposne?.data;

    // } catch (error) {
    //   return error?.response?.data
    // }
  }
  public async getVehicleModelList() {
    let url = `${this.apiDomain}mobileapp/index/vehiclemodels/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async getVehicleTypeProductList(type: string, modelCode?: string) {
    let url = `${this.apiDomain}mobileapp/index/vehicles/type/${type}/`
    if (modelCode) {
      url += `modelCode/${modelCode}/`
    }
    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
  public async getCMSPages(pageID: string) {
    let url = `${this.apiDomain}mobileapp/page/pageID/${pageID}/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    return resposne?.data?.data
  }
}

const getCreateCartPostData = (productID: number, cart: CartStateModel) => {
  var postData: any
  postData = { productID: productID }
  if (cart.productInfo?.combinationInfo?.length > 0) {
    postData.combinationID = cart.productInfo.combinationInfo[0].combinationID
    postData.combinationSKU = cart.productInfo.combinationInfo[0].combinationSKU
  }
  if (cart.accessoriesInfo?.length > 0) {
    postData.accessoryID = cart.accessoriesInfo[0].productID
    postData.accessoryQuantity = 1
  }
  return postData
}
const getUpdateCartPostData = (productID: number, cart: CartStateModel) => {
  var postData: any
  postData = { productID: productID, productQuantity: 1, cartID: cart.cartID }
  if (cart.productInfo?.combinationInfo?.length > 0) {
    postData.combinationID = cart.productInfo.combinationInfo[0].combinationID
    postData.combinationSKU = cart.productInfo.combinationInfo[0].combinationSKU
  }
  if (cart?.accessoriesInfo && cart?.accessoriesInfo?.length > 0) {
    postData.accessoryDetails = cart?.accessoriesInfo?.map((item) => {
      return {
        productID: item.productID,
        productQuantity: 1,
        tint_windshield: item?.tintDetails?.tint_windshield,
        tint_rear: item?.tintDetails?.tint_rear,
        tint_row_1: item?.tintDetails?.tint_row_1,
        tint_row_2: item?.tintDetails?.tint_row_2,
        tint_row_3: item?.tintDetails?.tint_row_3
      }
    })
  }
  if (cart?.serviceDetails && cart?.serviceDetails?.length > 0) {
    postData.serviceID = cart?.serviceDetails[0].productID
  }
  if (cart?.insuranceDetails && cart?.insuranceDetails.length > 0) {
    postData.planID = cart?.insuranceDetails[0].productID
    postData.planDetails = cart?.insuranceDetails[0].planDetails
  }
  if (cart?.showroomID) {
    postData.showroomID = cart?.showroomID
  }
  if (cart?.tradeInDetails && cart?.tradeInDetails.length > 0) {
    postData.tradeIn = 'Yes'
    postData.tradeInDetails = cart.tradeInDetails.map((item: any) => {
      return {
        modelYear: item.modelYear,
        brandID: item.brand,
        modelCode: item.modelCode,
        trim: item.trim,
        mileageID: item.mileage
      }
    })
  }
  if (cart?.financeDetails && cart?.financeDetails.length > 0) {
    if (
      cart?.financeDetails[0].monthlyPayment !== 0 &&
      cart?.financeDetails[0].monthlyPayment !== undefined
    ) {
      postData.financeDetails = [
        {
          financeType: 'monthlypayment',
          bankID: cart?.financeDetails[0].bankID,
          downPayment: cart?.financeDetails[0].downPayment,
          monthlyPayment: cart?.financeDetails[0].monthlyPayment,
          tenure: cart?.financeDetails[0].term
        }
      ]
    }
  }
  return postData
}
