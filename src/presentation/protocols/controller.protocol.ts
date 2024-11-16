import { type THttpResponse } from './http.protocol'

export interface THttpRequest<R = any, S = any, T = any> {
  params?: R
  query?: S
  body?: T
}

export interface IController<T = any> {
  handle: (request: T) => Promise<THttpResponse>
}
