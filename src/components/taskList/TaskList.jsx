import dayjs from "dayjs";
import { DATE_MASK_TIME_WITHOUT_YEAR } from "../../common/constants";
import CustomLink from "../link/CustomLink";
import listOfTasks from "../../mock/listOfTasks";
import routes from "../../common/routes";
import Paper from "../paper/Paper";
import Title from "../typography/title/Title";
import SubTitle from "../typography/subTitle/SubTitle";
import NumberIcon from "../NumberIcon/NumberIcon";

import ClassNames from "./styles.module.css";

const TaskLink = ({
  id,
  text,
  href,
  subTitle,
  dateOfPublication,
  typeOfTask,
}) => {
  return (
    <CustomLink to={href}>
      <Paper className={ClassNames.taskLink}>
        <header className={ClassNames.taskHeader}>
          <NumberIcon size={40} color={"var(--purple"}>
            {id}
          </NumberIcon>
          <div className={ClassNames.headerLabel}>
            <Title>
              {typeOfTask}. {text}
            </Title>
            <SubTitle className={ClassNames.date}>
              {dayjs(dateOfPublication)
                .format(DATE_MASK_TIME_WITHOUT_YEAR)
                .replace(/_/, "at")}
            </SubTitle>
          </div>
        </header>
        <SubTitle className={ClassNames.subTitle}>{subTitle}</SubTitle>
      </Paper>
    </CustomLink>
  );
};

const TaskList = () => {
  return (
    <div className={ClassNames.taskList}>
      {listOfTasks.map((task, index) => (
        <TaskLink
          key={index}
          id={task.id}
          text={task.name}
          subTitle={task.description}
          size={task.size}
          dateOfPublication={task.dateOfPublication}
          typeOfTask={task.typeOfTask}
          href={`${routes.TASK}/${task.id}`}
        />
      ))}
    </div>
  );
};

export default TaskList;
