type Email = {
  to: string
  from: string
  subject: string
  text: string
  html: string
}

export async function readEmail(recipient: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mswOutput = require('../mocks/msw.local.json')
    // TODO: add validation
    return mswOutput.email[recipient] as Email
  } catch (error: unknown) {
    console.error(`Error reading the email fixture`, error)
    return null
  }
}

export function extractUrl(text: string) {
  const urlRegex = /(?<url>https?:\/\/[^\s$.?#].[^\s]*)/
  const match = text.match(urlRegex)
  return match?.groups?.url
}
