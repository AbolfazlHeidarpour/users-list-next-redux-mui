import UseUserPaginationReturnType from "../../../controllers/User/types/UseUserPaginationReturnType";
import {UseSearchUser} from "../../../controllers/User/types/UseSearchUser";

type UserListViewProps = {
  readonly usersPagination: UseUserPaginationReturnType;
  readonly search: UseSearchUser;
}

export default UserListViewProps;