import { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import listOfTasks from "../../mock/listOfTasks";
import ClassNames from "./styles.module.css";
import error from "../../common/error";

const TaskPage = () => {
  const { taskId } = useParams();
  const task = listOfTasks[taskId];

  const TASK_PATH = `../tasks/taks_${taskId}/task_${taskId}.js`;

  const ScriptComponent = useMemo(() => {
    if (task)
      return lazy(() => import(`../tasks/taks_${taskId}/task_${taskId}.js`));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={ClassNames.taskPage}>
      {task ? (
        <>
          Задача номер №{taskId}
          <div>{task?.name}</div>
          <div>{task?.text}</div>
          <div>{task?.size}</div>
          <Suspense fallback={`Завантаження ${TASK_PATH}`}>
            <ScriptComponent />
          </Suspense>
        </>
      ) : (
        <p>{error.LOAD_ERROR}</p>
      )}
    </div>
  );
};

export default TaskPage;
