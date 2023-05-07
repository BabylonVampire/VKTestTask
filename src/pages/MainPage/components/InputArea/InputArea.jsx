import React, {useState} from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

const InputArea = ({ callBack }) => {

	const onChange = (e) => {
		callBack(e.target.value)
	}

	return (
		<TextArea rows={4} onChange={onChange} />
	)
}

export default InputArea;