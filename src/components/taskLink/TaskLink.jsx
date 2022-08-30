import { Link } from "react-router-dom";
import Paper from "../paper/Paper";
import ClassNames from './styles.module.css';

const TaskLink = ({ text, href }) => {
  return (
    <Paper className={ClassNames.taskLink}>
      <Link to={href}>{text}</Link>
    </Paper>
  );
};

export default TaskLink;
