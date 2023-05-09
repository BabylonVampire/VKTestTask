import React, {useState} from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

const InputArea = ({ callBack, value }) => {

	const onChange = (e) => {
		callBack(e.target.value)
	}

	return (
		<TextArea rows={4} onChange={onChange} value={value}/>
	)
}

export default InputArea;