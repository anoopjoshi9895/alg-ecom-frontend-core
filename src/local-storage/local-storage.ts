import { AES, MD5, enc } from 'crypto-js'
import { CRYPTO_KEY } from './local-storage-constants'
export class LocalStorage {
  public static getItem(key: string) {
    const ciphertext = MD5(key).toString()
    const encryptvalue = localStorage.getItem(ciphertext)
    if (encryptvalue == null) {
      return null
    }
    const bytes = AES.decrypt(encryptvalue, CRYPTO_KEY)
    const plaintext = bytes.toString(enc.Utf8)
    return plaintext
  }

  public static setItem(key: string, value: string) {
    const ciphertext = MD5(key).toString()
    const encryptedValue = AES.encrypt(value.toString(), CRYPTO_KEY)
    localStorage.setItem(ciphertext, encryptedValue.toString())
  }

  public static removeItem(key: string) {
    const ciphertext = MD5(key).toString()
    localStorage.removeItem(ciphertext)
  }
}
