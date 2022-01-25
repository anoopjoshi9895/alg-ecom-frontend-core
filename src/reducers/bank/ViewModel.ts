// import * as UserApi from '../api/user';
// import { toastr } from 'react-redux-toastr';

// import {api} from '../api';

// action types

export interface BankListStateModel {
  // isLoading: boolean;
  financeList: BankDetailsModel[]
}
export interface BankDetailsModel {
  bankID: number
  bankName: string
  annualInterestRate: number
  minimumTenure: number
  maximumTenure: number
  tenureIncValue: number
  minDownPayment: number
  maxDownPayment: number
}