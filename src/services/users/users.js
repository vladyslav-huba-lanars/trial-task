import httpErrors from 'http-errors'
const { BadRequest, NotFound } = httpErrors
import bcrypt from 'bcrypt'
import _ from 'lodash'
import config from '../../config.js'
import User from "./entities/user.js";
import sequelize from "../../database.js";

export async function createUser({
  name,
  email,
  password
}) {
  const user = await sequelize.transaction(async (t) => {
    const exitingUser = await User.findOne({
      where: { email },
      transaction: t
    })
    if (exitingUser) {
      throw new BadRequest('User with this email already exists')
    }
    return User.create({
      name,
      email,
      password: await hashPassword(password),
    }, { transaction: t })
  })
  return formatUser(user)
}

export async function putUser({
  id,
  name,
  email,
  password
}) {
  const user = await sequelize.transaction(async (t) => {
    const existingUser = await User.findByPk(id, { transaction: t })
    if (!existingUser) throw new NotFound()
    await existingUser.update({
      name,
      email,
      password: hashPassword(password)
    }, { transaction: t })
    return existingUser
  })
  return formatUser(user)
}

export async function deleteUser(id) {
  const user = await sequelize.transaction(async (t) => {
    const existingUser = await User.findByPk(id)
    if (!existingUser) throw new NotFound()
    await existingUser.destroy({ transaction: t })
    return existingUser
  })
  return formatUser(user)
}

export async function getUser(id) {
  const user = await User.findByPk(id)
  if (!user) throw new NotFound()
  return formatUser(user)
}

async function hashPassword(password) {
  return bcrypt.hash(password, config.hashingRounds)
}

function formatUser(user) {
  return _.pick(user, ['id', 'name', 'email'])
}
