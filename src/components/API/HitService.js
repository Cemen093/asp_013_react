export default class HitService {
  static async getCategories(){
    const response = await fetch(`https://localhost:7270/api/Category`)
    return await response.json()
  }
  static async getProducts(){
    const response = await fetch(`https://localhost:7270/api/Product`)
    return await response.json()
  }
}