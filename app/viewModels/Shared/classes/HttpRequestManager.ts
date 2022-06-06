import axios, {AxiosError} from "axios";

export default class HttpRequestManager {
  private requestBodyJson = '';
  private createRequestBody = <T>(data: T) => this.requestBodyJson = JSON.stringify(data);
  private requestConfig = axios.create({
    baseURL: 'http://localhost:3009/api',
    headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json",
    },
  });
  private errorCatcher = (error: AxiosError) => {
    if (error.response) console.log(error.response);
    else if (error.request) console.log(error.request);
    else console.log(error.message);
  };

  protected _requestsURL: string = '';

  post = async <D>(data: D) => {
    let result: any = {};
    this.createRequestBody(data);

    await this.requestConfig
      .post(this._requestsURL, this.requestBodyJson)
      .then(response => result = response.data)
      .catch(this.errorCatcher);

    return result;
  };
  delete = async (id: number) => {
    let result = {};
    await this.requestConfig
      .delete(this._requestsURL + `/:${id}`)
      .then(response => result = response.data)
      .catch(this.errorCatcher);
    return result;
  };
  get = async (page: number, per_page: number) => {
    let result = {};
    await this.requestConfig
      .get(this._requestsURL, {params: {page, per_page}})
      .then(response => result = JSON.parse(response.data))
      .catch(this.errorCatcher);

    return result;
  };
}