import { DatePicker } from 'antd';
import React from 'react'
import moment from 'moment';

const DayPicker = ({ callBack, value }) => {

	return (
		<DatePicker
			onChange={(date, dateString) => callBack(dateString)}
			value={value !== undefined ? moment(value) : undefined}
		/>
	)
}

export default DayPicker;
