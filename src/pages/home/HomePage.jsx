import listOfTasks from "../../mock/listOfTasks";
import TaskLink from "../../components/taskLink/TaskLink";
import routes from "../../common/routes";

const HomePage = () => {
  return (
    <div>
      <div>
        {listOfTasks.map((task, index) => (
          <TaskLink text={task.name} href={`${routes.TASK}/${index}`} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
