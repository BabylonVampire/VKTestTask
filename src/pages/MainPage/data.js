const towerOptions = [
	{ value: 'A', label: 'А' },
	{ value: 'B', label: 'Б' },
];

const floorOptions = [];

for (let i = 3; i <= 27; ++i ) {
	floorOptions.push({value: i, label: i})
};

const roomOptions = [];

for (let i = 1; i <= 10; ++i ) {
	roomOptions.push({value: i, label: i})
};

export default {
	towerOptions,
	roomOptions,
	floorOptions
}