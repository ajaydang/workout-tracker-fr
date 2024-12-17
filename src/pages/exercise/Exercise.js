import React, { useEffect, useState } from 'react';
import { Button, Table, Space } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getExercise } from '../../services/exercise';

const Exercise = () => {
	const [exerciseData, setExerciseData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchExerciseData = async () => {
		try {
			setIsLoading(true);
			const { data } = await getExercise();

			setExerciseData(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(true);
		}
	};

	useEffect(() => {
		fetchExerciseData();
	}, []);

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: 'Muscle Group',
			dataIndex: 'muscle_group',
			key: 'muscle_group',
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (_, record) => (
				<Space size='middle'>
					<Button
						icon={<EyeOutlined />}
						onClick={() => handleView(record.key)}
					/>
					<Button
						icon={<DeleteOutlined />}
						onClick={() => handleDelete(record.key)}
					/>
				</Space>
			),
		},
	];

	const handleView = (key) => {
		console.log('View exercise with key:', key);
	};

	const handleDelete = (key) => {
		console.log('Delete exercise with key:', key);
	};

	return (
		<div style={{ padding: 24, backgroundColor: '#fff' }}>
			<h2>Exercise List</h2>
			<Link to={'/exercise/add'}>
				<Button
					type='primary'
					style={{ marginBottom: 16 }}
				>
					Create Exercise
				</Button>
			</Link>
			<Table
				columns={columns}
				dataSource={exerciseData.data}
				pagination={false}
				rowKey='key'
				style={{ borderColor: '#000' }}
				bordered
				size='middle'
				scroll={{ x: true }}
				loading={isLoading}
			/>
		</div>
	);
};

export default Exercise;
