import Ajv from 'ajv'
import addKeywords from 'ajv-keywords'
import addFormats from 'ajv-formats'
import _ from 'lodash'
import httpErrors from 'http-errors'

const ajv = addFormats(addKeywords(new Ajv({ strict: false })))

export const validate = (schema, path) => {
  const compiledSchema = ajv.compile(schema)
  return (req, res, next) => {
    compiledSchema(_.get(req, path))
    if (compiledSchema.errors) {
      return next(new httpErrors.BadRequest(compiledSchema.errors))
    }
    next()
  }
}

export const validateBody = (schema) => validate(schema, 'body')
