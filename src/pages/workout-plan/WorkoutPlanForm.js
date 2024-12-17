import React, { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const WorkoutPlanForm = ({ onSubmit, initialValues }) => {
	const [form] = Form.useForm();

	useEffect(() => {
		if (initialValues) {
			form.setFieldsValue(initialValues);
		}
	}, [initialValues, form]);

	const handleFinish = (values) => {
		onSubmit(values);
	};

	return (
		<Form
			form={form}
			layout='vertical'
			onFinish={handleFinish}
			style={{ maxWidth: 600 }}
		>
			<Form.Item
				name='name'
				label='Name'
				rules={[
					{ required: true, message: 'Please input the workout plan name!' },
				]}
			>
				<Input placeholder='Enter Workout Plan Name' />
			</Form.Item>

			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default WorkoutPlanForm;
