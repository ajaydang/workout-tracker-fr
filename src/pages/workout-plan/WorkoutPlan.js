import React, { useEffect, useState } from 'react';
import { Button, Table, Space } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getWorkoutPlan } from '../../services/workoutPlan';

const WorkoutPlan = () => {
	const [workoutPlanData, setWorkoutPlanData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchWorkoutPlan = async () => {
		try {
			setIsLoading(true);
			const { data } = await getWorkoutPlan();

			setWorkoutPlanData(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(true);
		}
	};

	useEffect(() => {
		fetchWorkoutPlan();
	}, []);

	console.log(workoutPlanData);
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Created At',
			dataIndex: 'created_at',
			key: 'created_at',
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
		console.log('View workout plan with key:', key);
	};

	const handleDelete = (key) => {
		console.log('Delete workout plan with key:', key);
	};

	return (
		<div style={{ padding: 24, backgroundColor: '#fff' }}>
			<h2>Workout Plan List</h2>
			<Link to={'/workout-plan/add'}>
				<Button
					type='primary'
					style={{ marginBottom: 16 }}
				>
					Create Workout Plan
				</Button>
			</Link>
			<Table
				columns={columns}
				dataSource={workoutPlanData.data}
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

export default WorkoutPlan;
