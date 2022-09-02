import dayjs from "dayjs";
import { DATE_MASK_TIME_WITHOUT_YEAR } from "../common/constants";

const formatDate = (date) =>
  dayjs(date).format(DATE_MASK_TIME_WITHOUT_YEAR).replace(/_/, "at");

export default formatDate;
