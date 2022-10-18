import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

/**
 * @class Base
 * @abstract
 */
abstract class Base {
  /**
   * @static
   * @protected
   * @memberof Base
   */
  protected static DEFAULT_CONFIG: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    paramsSerializer: {
      encode: (params) => stringify(params, { indices: false }),
    },
  };
  /**
   * @static
   * @protected
   * @memberof Base
   */
  protected static instance: AxiosInstance = axios.create(this.DEFAULT_CONFIG);

  /**
   * @param {string} token
   * @returns {void}
   * @memberof Base
   * @static
   */
  static setToken(token: string): void {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

/**
 * @class Request
 * @abstract
 */
abstract class Request extends Base {
  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof Request
   */
  static get<T>(url: string, config?: AxiosRequestConfig) {
    return this.send<T>(url, { ...config, method: 'get' });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof Request
   */
  static post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.send<T>(url, { ...config, method: 'post', data });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof Request
   */
  static put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.send<T>(url, { ...config, method: 'put', data });
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof Request
   */
  static delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.send<T>(url, { ...config, method: 'delete' });
  }

  /**
   * @param {string} url
   * @param {any} [data]
   * @param {AxiosRequestConfig} [config]
   * @static
   * @memberof Request
   */
  static patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.send<T>(url, { ...config, method: 'patch', data });
  }

  /**
   * @param {string} url
   * @param {AxiosRequestConfig} [config]
   * @static
   * @private
   * @memberof Request
   */
  private static send<T>(url: string, config?: AxiosRequestConfig) {
    return async () => {
      try {
        const conf = { ...this.DEFAULT_CONFIG, ...config };
        const response = await Request.instance.request<T>({
          ...conf,
          url,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    };
  }
}

export default Request;
