import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {schema, rules} from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  async RegisterShow({view}: HttpContextContract) {
    return view.render('auth/register')
  }

  async LoginShow({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  async Register({request, response, auth}: HttpContextContract) {
    const userSchema = schema.create({
      username: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'username', caseInsensitive: true })]),
      email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]),
      password: schema.string({}, [rules.minLength(8)])
    })
    const data = await request.validate({ schema: userSchema })
    const user = await User.create(data)
    await auth.login(user)

    return response.redirect().toRoute('users.dashboard')


  }

  async Login({request, response, auth, session}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    try{
      await auth.attempt(email, password)
      return response.redirect().toRoute('auth.loginshow')
    } catch (error) {
      session.flash('form', 'Your username, email, or password is incorrect')
      return response.redirect().back()

  }
}

  async Logout({auth, response}: HttpContextContract) {
    await auth.logout()
    return response.redirect().toRoute('auth.loginshow')
  }

  }
