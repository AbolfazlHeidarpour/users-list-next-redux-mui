import UserPaginationState from "../../../models/Users/UserPaginationState";

const initialUsersPaginationState: UserPaginationState = {
  page: 0,
  per_page: 10,
  users: []
};

export default initialUsersPaginationState;