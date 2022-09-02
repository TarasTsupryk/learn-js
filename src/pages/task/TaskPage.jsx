import { lazy, Suspense, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ScriptLabel from "../../components/scriptLabel/ScriptLabel";
import listOfTasks from "../../mock/listOfTasks";
import ClassNames from "./styles.module.css";
import error from "../../common/error";

const TaskPage = () => {
  const [isError, setIsError] = useState("");
  const { taskId } = useParams();
  const task = listOfTasks.find((task) => task.id === taskId);

  const TASK_PATH = `../tasks/taks_${taskId}/task_${taskId}.js`;

  const ScriptComponent = useMemo(() => {
    if (task)
      return lazy(() =>
        import(`../tasks/taks_${taskId}/task_${taskId}.js`).catch((e) => {
          setIsError(e.message);
        })
      );
    // eslint-disable-next-line
  }, []);

  if (!task) return null;
  const { name, text, size, testCommand, description } = task;

  return (
    <div className={ClassNames.taskPage}>
      {task ? (
        <>
          Задача номер №{taskId}
          <div>{name}</div>
          <div>{text}</div>
          <div>{size}</div>
          <div>{description}</div>
          <div>
            Для запуску тесту запустіть команду{" "}
            <ScriptLabel label={testCommand} /> в терміналі
          </div>
          {!isError ? (
            <Suspense fallback={`Завантаження ${TASK_PATH}`}>
              <ScriptComponent />
            </Suspense>
          ) : (
            <div>
              Помилка завантаження скрипта {TASK_PATH}
              <br />
              {isError}
            </div>
          )}
        </>
      ) : (
        <p>{error.LOAD_ERROR}</p>
      )}
    </div>
  );
};

export default TaskPage;
