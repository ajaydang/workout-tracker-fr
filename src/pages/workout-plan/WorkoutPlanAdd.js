import React, { useState } from 'react';
import { Form, Layout, notification } from 'antd';
import WorkoutPlanForm from './WorkoutPlanForm';
import { addWorkoutPlan } from '../../services/workoutPlan';

const { Content } = Layout;

const WorkoutPlanAdd = ({ initialValues }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [form] = Form.useForm();

	const handleSubmit = async (values) => {
		setIsLoading(true);
		const payload = {
			name: values.name,
			user_id: 1,
		};
		try {
			const { data } = await addWorkoutPlan(payload);
			setIsLoading(false);

			notification.success({
				message: 'Workout Plan Created',
				description: 'Your workout plan has been successfully created.',
				placement: 'topRight',
			});

			form.resetFields();
		} catch (error) {
			setIsLoading(false);

			notification.error({
				message: 'Error Creating workout plan',
				description:
					error.message || 'There was an error while creating workout.',
				placement: 'topRight',
			});
			throw new Error('Eerror', error);
		}
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Content style={{ margin: '24px 16px 0' }}>
				<div style={{ padding: 24, backgroundColor: '#fff', maxWidth: 800 }}>
					<h2>{initialValues ? 'Edit Workout Plan' : 'Add Workout Plan'}</h2>
					<WorkoutPlanForm
						onSubmit={handleSubmit}
						initialValues={initialValues}
					/>
				</div>
			</Content>
		</Layout>
	);
};

export default WorkoutPlanAdd;
