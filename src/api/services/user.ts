import * as http from './http'
import ApiService from './service'

export default class UserService extends ApiService {
  public async login(credentials: { userLogin: string; password: string }) {
    const url = `${this.apiDomain}/mobileapp/user/index`
    const postData = new FormData()

    postData.append('userLogin', credentials?.userLogin)
    postData.append('userPassword', credentials?.password)
    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: ''
      }
    } else {
      return {
        data: undefined,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }
  public async signUp(data: any) {
    const url = `${this.apiDomain}mobileapp/user/signup/`

    const resposne = await http.post(
      url,
      data,
      this.languageID,
      this.websiteID,
      this.subsiteID
      // 'multipart/form-data'
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: ''
      }
    } else {
      return {
        data: undefined,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async changeUserPhone(data: any, userToken?: string) {
    const url = `${this.apiDomain}mobileapp/user/changeUserPhone/`

    const resposne = await http.post(
      url,
      data,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      userToken
      // 'multipart/form-data'
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: ''
      }
    } else {
      return {
        data: undefined,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async verifyOtp(data: any) {
    const url = `${this.apiDomain}mobileapp/user/verifyOTP/`

    try {
      const resposne = await http.post(
        url,
        data,
        this.languageID,
        this.websiteID,
        this.subsiteID
        // 'multipart/form-data'
      )
      if (resposne.data?.meta?.responsecode === 200) {
        return {
          data: resposne?.data?.data,
          responsecode: resposne.data?.meta?.responsecode,
          status: resposne.data?.meta?.status,
          message: ''
        }
      } else {
        return {
          data: undefined,
          responsecode: resposne.data?.meta?.responsecode,
          status: resposne.data?.meta?.status,
          message: resposne.data?.meta?.message
        }
      }
    } catch (error) {
      return {
        data: undefined,
        responsecode: error.response.data?.meta?.responsecode,
        status: error.response.data?.meta?.status,
        message: error.response.data?.meta?.message
      }
    }
  }

  public async resendOtp(data: any) {
    const url = `${this.apiDomain}mobileapp/user/resendOTP/`

    try {
      const resposne = await http.post(
        url,
        data,
        this.languageID,
        this.websiteID,
        this.subsiteID
        // 'multipart/form-data'
      )
      if (resposne.data?.meta?.responsecode === 200) {
        return {
          data: resposne?.data?.data,
          responsecode: resposne.data?.meta?.responsecode,
          status: resposne.data?.meta?.status,
          message: ''
        }
      } else {
        return {
          data: undefined,
          responsecode: resposne.data?.meta?.responsecode,
          status: resposne.data?.meta?.status,
          message: resposne.data?.meta?.message
        }
      }
    } catch (error) {
      return {
        data: undefined,
        responsecode: error.response.data?.meta?.responsecode,
        status: error.response.data?.meta?.status,
        message: error.response.data?.meta?.message
      }
    }
  }

  public async fbUserSignup(data: any) {
    const url = `${this.apiDomain}mobileapp/user/fbUserSignup/`

    const resposne = await http.post(
      url,
      data,
      this.languageID,
      this.websiteID,
      this.subsiteID
      // 'multipart/form-data'
    )

    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: ''
      }
    } else {
      return {
        data: undefined,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async googleUserSignup(data: any) {
    const url = `${this.apiDomain}mobileapp/user/checkgoogleLogin/`

    const resposne = await http.post(
      url,
      data,
      this.languageID,
      this.websiteID,
      this.subsiteID
      // 'multipart/form-data'
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return {
        data: resposne?.data?.data,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    } else {
      return {
        data: undefined,
        responsecode: resposne.data?.meta?.responsecode,
        status: resposne.data?.meta?.status,
        message: resposne.data?.meta?.message
      }
    }
  }

  public async gerConfigurations() {
    const url = `${this.apiDomain}mobileapp/user/listConfigurations/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return resposne?.data?.data && resposne?.data?.data.length
        ? resposne?.data?.data
        : null
    } else {
      return undefined
    }
  }

  public async gerOrders() {
    const url = `${this.apiDomain}mobileapp/user/listOrders/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return resposne?.data?.data && resposne?.data?.data.length
        ? resposne?.data?.data
        : null
    } else {
      return undefined
    }
  }

  public async gerBookings() {
    const url = `${this.apiDomain}mobileapp/user/listBookings/`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return resposne?.data?.data && resposne?.data?.data.length
        ? resposne?.data?.data
        : null
    } else {
      return undefined
    }
  }

  public async gerOrderDetails(orderID?: number) {
    const url = `${this.apiDomain}mobileapp/user/listOrders/orderID/${orderID}`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return resposne?.data?.data
    } else {
      return undefined
    }
  }
  public async getBookingDetails(bookingID?: number) {
    const url = `${this.apiDomain}mobileapp/user/listBookings/orderID/${bookingID}`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.data?.meta?.responsecode === 200) {
      return resposne?.data?.data
    } else {
      return undefined
    }
  }

  public async getConfigurationDetails(configID?: number) {
    const url = `${this.apiDomain}mobileapp/user/listConfigurations/configID/${configID}`

    const resposne = await http.get(
      url,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      this.token
    )
    if (resposne.status === 200) {
      return resposne?.data?.data
    } else {
      return undefined
    }
  }
}
