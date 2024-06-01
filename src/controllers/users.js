import * as userService from '../services/users/users.js'

export async function createUser(req, res, next) {
  const user = await userService.createUser(req.body)
  res.json(user)
}

export async function putUser(req, res, next) {
  const user = await userService.putUser({ id: +req.params.id, ...req.body })
  res.json(user)
}

export async function deleteUser(req, res, next) {
  const user = await userService.deleteUser(+req.params.id)
  res.json(user)
}

export async function getUser(req, res, next) {
  const user = await userService.getUser(+req.params.id)
  res.json(user)
}
