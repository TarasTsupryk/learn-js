import { useParams } from "react-router-dom";
import {
  ScriptLabel,
  Paper,
  NumberIcon,
  Title,
  SubTitle,
} from "../../components";
import listOfTasks from "../../mock/listOfTasks";
import ClassNames from "./styles.module.css";
import error from "../../common/error";
import TaskLoader from "./TaskLoader";
import { formatDate } from "../../utils";

const TaskPage = () => {
  const { taskId } = useParams();
  const task = listOfTasks.find((task) => task.id === taskId);

  if (!task) return null;
  const { id, name, size, testCommand, description, dateOfPublication } = task;

  return (
    <div className={ClassNames.taskPage}>
      {task ? (
        <>
          <Paper className={ClassNames.header}>
            <NumberIcon size={40} color={"var(--purple"}>
              {id}
            </NumberIcon>
            <div style={{ marginLeft: "var(--spacing12)" }}>
              <Title className={ClassNames.title}>
                Задача номер №{taskId}. {name}
              </Title>
              <SubTitle style={{ marginLeft: "auto" }}>
                {formatDate(dateOfPublication)}
              </SubTitle>
            </div>
          </Paper>
          <Paper style={{ marginBottom: 8 }}>{size}</Paper>
          <Paper style={{ marginBottom: 8 }}>
            <div>{description}</div>
            Для запуску тесту запустіть команду{" "}
            <ScriptLabel label={testCommand} /> в терміналі
          </Paper>
          <Paper style={{ marginBottom: 8 }}>
            <TaskLoader task={task} />
          </Paper>
        </>
      ) : (
        <p>{error.LOAD_ERROR}</p>
      )}
    </div>
  );
};

export default TaskPage;
