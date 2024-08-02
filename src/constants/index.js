const frontend_url = import.meta.env.PROD
  ? 'https://www.strikeo.com'
  : 'http://localhost:3000'
const backend_url = import.meta.env.PROD
  ? 'https://www.strikeo.com'
  : 'http://localhost:8000'
export const environment = {
  api_url: `${backend_url}/api`,
  file_url: `${backend_url}`,
  front_end: `${frontend_url}`
}
