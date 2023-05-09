import React from 'react'
import { TimePicker } from 'antd'
import moment from 'moment'

const TimeRange = ({ callBack, value }) => {

	return (
		<TimePicker.RangePicker
			onChange={(time, timeString) => callBack(timeString)}
			value={
				value !== undefined ? [moment(value[0], "HH:mm:ss"), moment(value[1], "HH:mm:ss")] : undefined
			}
		/>
	)
}

export default TimeRange;
