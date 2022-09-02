import { useParams } from "react-router-dom";
import listOfTasks from "../../mock/listOfTasks";
import error from "../../common/error";
import ClassNames from './styles.module.css';

const TaskPage = () => {
  const { taskId } = useParams();
  const task = listOfTasks[taskId];

  if (!task) return error.TASK_DOES_NOT_EXIST;

  const { name, text, size } = task;

  return (
    <div className={ClassNames.taskPage}>
      Задача номер №{taskId}
      <div>{name}</div>
      <div>{text}</div>
      <div>{size}</div>
    </div>
  );
};

export default TaskPage;
