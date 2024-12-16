import React, { useState } from 'react';
import { Form, Layout, notification } from 'antd';
import ExerciseForm from './ExerciseForm'; // Adjust path as necessary
import { addExercise } from '../../services/exercise';

const { Content } = Layout;

const ExerciseAdd = ({ initialValues }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [form] = Form.useForm();

	const handleSubmit = async (values) => {
		setIsLoading(true);
		const payload = {
			name: values.name,
			description: values.description,
			category: values.category,
			muscle_group: values.muscle_group,
		};
		try {
			const { data } = await addExercise(payload);
			setIsLoading(false);

			notification.success({
				message: 'Exercise Created',
				description: 'Your exercise has been successfully created.',
				placement: 'topRight',
			});

			form.resetFields();
		} catch (error) {
			setIsLoading(false);

			notification.error({
				message: 'Error Creating Exercise',
				description:
					error.message || 'There was an error while creating exercise.',
				placement: 'topRight',
			});
			throw new Error('Eerror', error);
		}
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Content style={{ margin: '24px 16px 0' }}>
				<div style={{ padding: 24, backgroundColor: '#fff', maxWidth: 800 }}>
					<h2>{initialValues ? 'Edit Exercise' : 'Add Exercise'}</h2>
					<ExerciseForm
						onSubmit={handleSubmit}
						initialValues={initialValues}
					/>
				</div>
			</Content>
		</Layout>
	);
};

export default ExerciseAdd;
