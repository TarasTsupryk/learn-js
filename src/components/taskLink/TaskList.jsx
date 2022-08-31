import { Link } from "react-router-dom";
import Paper from "../paper/Paper";
import ClassNames from "./styles.module.css";
import listOfTasks from "../../mock/listOfTasks";
import routes from "../../common/routes";

const TaskLink = ({ text, href }) => {
  return (
    <Paper className={ClassNames.taskLink}>
      <Link to={href}>{text}</Link>
    </Paper>
  );
};

const TaskList = () => {
  return (
    <div className={ClassNames.taskList}>
      {listOfTasks.map((task, index) => (
        <TaskLink text={task.name} href={`${routes.TASK}/${index}`} />
      ))}
    </div>
  );
};

export default TaskList;
