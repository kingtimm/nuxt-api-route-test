import returnResponse from './lib/ping-pong'

export default defineEventHandler(async (event) => {
  const query = await readBody(event)

  return returnResponse(query.prompt as string)
})
