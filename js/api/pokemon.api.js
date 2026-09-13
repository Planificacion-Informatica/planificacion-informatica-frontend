import { API_BASE_URL } from '../config.js'

const request = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
}