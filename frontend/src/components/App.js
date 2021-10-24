import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Input, Space, Table } from 'antd';

import '../css/App.css';
import axios from 'axios';
function App() {
	const [noOfRows, setNoOfRows] = useState(null);
	const [outPut, setOutPut] = useState(null);
	const inputChanged = (e) => {
		setOutPut(null);
		setNoOfRows(e.target.value);
	};
	const searchData = () => {
		axios.get(`http://localhost:8000/property/${noOfRows}`).then((data) => {
			setOutPut(data.data);
		});
	};
	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'id',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'id',
		},
		{
			title: 'Renting Duration',
			dataIndex: 'minimum_renting_duration',
			key: 'id',
		},
		{
			title: 'Per night price',
			key: 'id',
			dataIndex: 'per_night_price',
		},
		{
			title: 'No. of rooms',
			key: 'id',
			dataIndex: 'no_of_rooms',
		},
		{
			title: 'No. of beds',
			key: 'id',
			dataIndex: 'no_of_beds',
		},
		{
			title: 'Country',
			key: 'id',
			dataIndex: 'country',
		},
	];

	return (
		<div className='App' >
			<div style={{margin:20}}>
				<Input
					style={{
						width: 200,
						marginRight: 12,
					}}
					placeholder='input No. of rows to fetch'
					enterbutton='Search'
					size='large'
					onChange={inputChanged}
					type={'number'}
					allowClear
				/>
				<Button
					style={{ marginTop: 5 }}
					type='primary'
					onClick={searchData}
				>
					Submit
				</Button>
			</div>
			<div style={{padding:40}}>
				<Table columns={columns} dataSource={outPut} />
			</div>
		</div>
	);
}

export default App;
