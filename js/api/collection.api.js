import { API_BASE_URL } from '../config.js'

const request = async (
  endpoint,
  options = {}
) => {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    }
  )
}
