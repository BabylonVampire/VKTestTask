import { DatePicker } from 'antd';
import React from 'react'

const DayPicker = ({callBack}) => {

	const getDate = (date, dateString) => {
		callBack(dateString);
	}

	return (
		<DatePicker onChange={getDate}/>
	)
}

export default DayPicker;
