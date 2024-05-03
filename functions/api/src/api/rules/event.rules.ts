import { param } from 'express-validator'

export const eventIdParamRule = param('eventId').notEmpty().isString()
