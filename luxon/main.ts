import {DateTime} from 'luxon';
import * as logger from 'signale';

const d = DateTime.utc();

const dailyFormat = 'yyyyMMdd';
const daily = d.toFormat(dailyFormat);
logger.success(`${dailyFormat}  => ${daily}`);

const weeklyFormat = "yyyy'W'WW";
const weekly = d.toFormat(weeklyFormat);
logger.success(`${weeklyFormat} => ${weekly}`);
