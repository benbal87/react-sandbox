import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { isNil } from 'lodash'
import { isNotEmpty } from 'utils/utils'

export type ErrorHandlerType = (error: any, response?: Response) => any

export interface HttpClientProps extends AxiosRequestConfig {
  url: string
  errorHandler?: ErrorHandlerType
  errorMessage?: string
}

export function httpClient<T>(
  requestProps: HttpClientProps
): Promise<AxiosResponse<T>> {
  setDefaultValues(requestProps)

  return axios(requestProps).catch((error: any) =>
    handleError({
      url: requestProps.url,
      errorHandler: requestProps.errorHandler,
      error,
      errorMessage: requestProps.errorMessage
    })
  )
}

function setDefaultValues(requestProps: HttpClientProps): void {
  requestProps.method ??= 'get'
  requestProps.responseType ??= 'json'
  requestProps.withCredentials ??= true
}

function handleError({
  url,
  errorHandler,
  response,
  error,
  errorMessage
}: {
  url: string
  errorHandler?: ErrorHandlerType
  response?: Response
  error?: any
  errorMessage?: string
}): any {
  const getAdditionalErrorMessage = (errorMessage: string | undefined) =>
    isNotEmpty(errorMessage) ? ` --- ${errorMessage}` : ''

  if (!isNil(response)) {
    console.error(
      `${response.status} - Could not fetch data for url: ` +
        `"${url}"${getAdditionalErrorMessage(errorMessage)}`
    )
  } else if (!isNil(error)) {
    const prefix = error.name === 'AbortError' ? 'Fetch Aborted! ' : ''
    const msg = getAdditionalErrorMessage(errorMessage)
    console.error(`${prefix}Error occurred during fetch: "${url}"${msg}`)
  }

  return errorHandler ? errorHandler(error, response) : undefined
}
