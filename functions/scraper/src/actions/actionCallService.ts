import axios, { type AxiosRequestConfig } from 'axios'

export async function actionCallService(reqConfig: AxiosRequestConfig): Promise<any> {
  console.log(`actionCallService > url:`, reqConfig.url)
  console.log(`actionCallService > payload:`, reqConfig.data)

  let response = {}
  try {
    response = await axios({ method: 'POST', ...reqConfig })
  } catch (e) {
    console.error(e)
  }

  return response
}
