import routes from "../../common/routes";
import TaskPage from "../task/TaskPage";
import HomePage from "../home/HomePage";

const appRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: `${routes.TASK}/:taskId`,
    element: <TaskPage />,
  },
];

export default appRoutes;
