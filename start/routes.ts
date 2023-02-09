/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

//Auth Routes

Route.get('/register', 'AuthController.RegisterShow').as('auth.registershow')
Route.get('/login', 'AuthController.LoginShow').as('auth.loginshow')
Route.post('/register', 'AuthController.Register').as('auth.register')
Route.post('/login', 'AuthController.Login').as('auth.login')

//User Routes
Route.get('/dashboard', 'UsersController.DashboardShow').as('users.dashboard').middleware('silentAuth')

