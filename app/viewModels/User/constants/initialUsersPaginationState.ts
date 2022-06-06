import UserPaginationState from "../../../models/UserPaginationState";

const initialUsersPaginationState: UserPaginationState = {
  page: -1,
  per_page: -1,
  total: -1,
  users: [],
  isLoading: false
};

export default initialUsersPaginationState;