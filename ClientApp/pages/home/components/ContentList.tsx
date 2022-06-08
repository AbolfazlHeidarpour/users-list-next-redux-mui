import UsersListController from "../../../app/controllers/User/components/UsersListController";
import CreateUserFormController from "../../../app/controllers/User/components/CreateUserFormController";

const contentList: Record<number, JSX.Element> = {
  0: <UsersListController />,
  1: <CreateUserFormController />
}

export default contentList;