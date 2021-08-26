import axios from "../axios";

class BaseProxy {
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  submit (type, url, data = {}) {
    return new Promise((resolve, reject) => {
      axios[type](url + this.getParameterString(), data)
        .then(response => {
          resolve(response.data);
        })
        .catch(({ response }) => {
          if (response) {
            reject(response.data);
          } else {
            reject(new Error('Error while connecting to api'));
          }
        });
    });
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @returns {string} The parameter string.
   */
  getParameterString () {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys
      .filter(key => !!this.parameters[key])
      .map(key => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }

  all () {
    return this.submit('get', `/${this.endpoint}`);
  }
}

export default BaseProxy;