export default interface ListResponse<T> {
  readonly users: T[];
  readonly page: number;
  readonly per_page: number;
  readonly total: number;
}