import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import duration from "dayjs/plugin/duration";
import isToday from "dayjs/plugin/isToday";
import isLeapYear from "dayjs/plugin/isLeapYear";
import isBetween from "dayjs/plugin/isBetween";

dayjs.locale("zh-cn");
dayjs.extend(duration);
dayjs.extend(isToday);
dayjs.extend(isLeapYear);
dayjs.extend(isBetween);

export default dayjs;
