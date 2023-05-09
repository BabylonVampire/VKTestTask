import React, { useState } from 'react'
import { Button } from 'antd';
import SelectValue from './components/SelectValue/SelectValue';
import DayPicker from './components/DayPicker/DayPicker';
import TimeRange from './components/TimeRange/TimeRange';
import InputArea from './components/inputArea/InputArea';
import './MainPage.css';
import options from './data';

const MainPage = () => {

	const [tower, setTower] = useState();
	const [floor, setFloor] = useState();
	const [room, setRoom] = useState();
	const [data, setData] = useState();
	const [time, setTime] = useState();
	const [comment, setComment] = useState();

	const clearData = () => {
		setTower(undefined);
		setFloor(undefined);
		setRoom(undefined);
		setData(undefined);
		setTime(undefined);
		setComment(undefined);
	}

	const sendData = () => {
		if (!tower) {
			console.error("Выбор башни - обязательное поле!");
			return;
		}

		if (!floor) {
			console.error("Выбор этажа - обязательное поле!");
			return;
		}

		if (!room) {
			console.error("Выбор переговорной - обязательное поле!");
			return;
		}

		if (!data) {
			console.error("Выбор даты - обязательное поле!");
			return;
		}

		if (!time) {
			console.error("Выбор времени - обязательное поле!");
			return;
		}

		console.log(
			JSON.stringify(
				{
					tower: tower,
					floor: floor,
					room: room,
					data: data,
					time: time,
					comment: comment
				}
			)
		)
	}

	return (
		<div className="mainPage">
			<div className="input_form">
				<div className="input_container">
					<div className="title">Выбор башни</div>
					<SelectValue options={options.towerOptions} callBack={setTower} value={tower} />
				</div>
				<div className="input_container">
					<div className="title">Выбор этажа</div>
					<SelectValue options={options.floorOptions} callBack={setFloor} value={floor} />
				</div>
				<div className="input_container">
					<div className="title">Выбор переговорной</div>
					<SelectValue options={options.roomOptions} callBack={setRoom} value={room} />
				</div>
				<div className="input_container">
					<div className="title">Выбор даты посещения</div>
					<DayPicker callBack={setData} value={data} />
				</div>
				<div className="input_container">
					<div className="title">Выбор времени посещения</div>
					<TimeRange callBack={setTime} value={time} />
				</div>
				<div className="input_container">
					<div className="title">Комментарий</div>
					<InputArea callBack={setComment} value={comment} />
				</div>
				<Button type="default" onClick={clearData}>Очистить форму</Button>
				<Button type="default" onClick={sendData} >Отправить форму</Button>
			</div>
		</div>
	)
}

export default MainPage;
