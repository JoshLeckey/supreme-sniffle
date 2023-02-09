import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

//import User from 'App/Models/User'

export default class UserSController {
  async DashboardShow({view}: HttpContextContract) {
    return view.render('user/dashboard')
  }
}
