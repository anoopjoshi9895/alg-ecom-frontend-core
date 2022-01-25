import * as http from './http'
import ApiService from './service'

const serviceEndpoint = 'mobileapp/quick'

export default class QuickAccessService extends ApiService {
  public async RequestCallback(data: any) {
    var postData = new FormData()
    postData.append('title', data.title)
    postData.append('firstName', data.firstName)
    postData.append('lastName', data.lastName)
    postData.append('phoneNumber', data.phoneNumber)
    postData.append('email', data.email)
    postData.append('productID', data.productID)
    postData.append('userID', data.userID)

    const url = `${this.apiDomain}/${serviceEndpoint}/savecallback`

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

  public async BookTestDrive(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    postData.append('title', data.title)
    postData.append('firstName', data.firstName)
    postData.append('lastName', data.lastName)
    postData.append('phoneNumber', data.phoneNumber)
    postData.append('email', data.email)
    postData.append('productID', data.productID)
    postData.append('userID', data.userID)
    postData.append('showroomID', data.showroomID)
    postData.append('scheduledTime', data.date)
    postData.append('comments', data.comments)

    const url = `${this.apiDomain}/${serviceEndpoint}/bookdrive`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async ShowRoomVisit(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    postData.append('title', data.title)
    postData.append('firstName', data.firstName)
    postData.append('lastName', data.lastName)
    postData.append('phoneNumber', data.phoneNumber)
    postData.append('email', data.email)
    postData.append('productID', data.productID)
    postData.append('userID', data.userID)
    postData.append('showroomID', data.showroomID)
    postData.append('visitDay', data.date)
    postData.append('visitTime', data.time)

    const url = `${this.apiDomain}/${serviceEndpoint}/schedulevisit`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async RequestQuote(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    postData.append('title', data.title)
    postData.append('firstName', data.firstName)
    postData.append('lastName', data.lastName)
    postData.append('phoneNumber', data.phoneNumber)
    postData.append('email', data.email)
    postData.append('productID', data.productID)
    postData.append('userID', data.userID)
    postData.append('showroomID', data.showroomID)
    postData.append('comments', data.comments)

    const url = `${this.apiDomain}/${serviceEndpoint}/requestquote`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async BookService(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    postData.append('title', data?.title)
    postData.append('firstName', data?.firstName)
    postData.append('lastName', data?.lastName)
    postData.append('phoneNumber', data?.phoneNumber)
    postData.append('email', data?.email)
    postData.append('modelID', data?.modelID)
    postData.append('userID', data?.userID)
    postData.append('showroomID', data?.showroomID)
    postData.append('vehRegNo', data?.vehRegNo)
    postData.append('mileage', data?.mileage)
    postData.append('comments', data?.comments)

    const url = `${this.apiDomain}/mobileapp/quick/requestService/`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async DownloadBrochure(data: any) {
    var postData = new FormData()
    postData.append('title', data.title)
    postData.append('firstName', data.firstName)
    postData.append('lastName', data.lastName)
    postData.append('phoneNumber', data.phoneNumber)
    postData.append('email', data.email)
    postData.append('productID', data.productID)
    postData.append('userID', data.userID)

    const url = `${this.apiDomain}/${serviceEndpoint}/downloadbrochure`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async NotifyMe(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    if (data?.title) {
      postData.append('title', data.title)
    }

    if (data?.firstName) {
      postData.append('firstName', data.firstName)
    }

    if (data?.lastName) {
      postData.append('lastName', data.lastName)
    }

    if (data?.phoneNumber) {
      postData.append('phoneNumber', data.phoneNumber)
    }
    if (data?.email) {
      postData.append('email', data.email)
    }
    if (data?.productID) {
      postData.append('productID', data.productID)
    }

    const url = `${this.apiDomain}/mobileapp/catalog/postInterest/`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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

  public async SaveEnquiry(data: any) {
    var postData = new FormData()
    // postData.append('modelCode', data.title);
    postData.append('title', data?.title)
    postData.append('firstName', data?.firstName)
    postData.append('lastName', data?.lastName)
    postData.append('phoneNumber', data?.phoneNumber)
    postData.append('email', data?.email)
    postData.append('modelID', data?.modelID)
    postData.append('businessSource', data?.businessSource)
    if (data?.showroomID) {
      postData.append('showroomID', data?.showroomID)
    }
    if (data?.comments) {
      postData.append('comments', data?.comments)
    }

    const url = `${this.apiDomain}/mobileapp/quick/saveenquiry/`

    const resposne = await http.post(
      url,
      postData,
      this.languageID,
      this.websiteID,
      this.subsiteID,
      '',
      this.token
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
}
