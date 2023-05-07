import React from 'react'
import { Select } from 'antd'

const SelectValue = ({ options, callBack, value }) => {

	return (
		<Select
			value={value}
			onChange={callBack}
			defaultValue=""
			style={{ width: 120 }}
			options={options}
		/>
	)
}

export default SelectValue;