import React from 'react'
import { TimePicker } from 'antd'

const TimeRange = ({ callBack }) => {

	const getTime = (time, timeRange) => {
		callBack(timeRange);
	}

	return (
		<TimePicker.RangePicker onChange={getTime}/>
	)
}

export default TimeRange;
