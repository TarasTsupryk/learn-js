import { lazy, Suspense, useMemo, useState } from "react";

const TaskLoader = ({ task }) => {
  const [isError, setIsError] = useState("");
  const taskId = task?.id;
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

  return (
    <>
      {!isError ? (
        <>
          <Suspense fallback={`Завантаження ${TASK_PATH}`}>
            <ScriptComponent />
          </Suspense>
          <span style={{ color: "var(--green)" }}>
            Успішно завантажено {TASK_PATH}
          </span>
        </>
      ) : (
        <span style={{ color: "var(--red)" }}>
          Помилка завантаження скрипта {TASK_PATH}
          <br />
          {isError}
        </span>
      )}
    </>
  );
};

export default TaskLoader;
