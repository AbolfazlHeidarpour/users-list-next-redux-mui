import DeleteUserResponse from "../../../models/API/DeleteUserResponse";

const initialDeleteResponse: DeleteUserResponse = {
  data: {
    user_id: -1,
    message: '',
    status: -1,
  },
};

export default initialDeleteResponse;