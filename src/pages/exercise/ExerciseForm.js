import React, { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const ExerciseForm = ({ onSubmit, initialValues }) => {
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
				label='Exercise Name'
				rules={[{ required: true, message: 'Please input the exercise name!' }]}
			>
				<Input placeholder='Enter exercise name' />
			</Form.Item>

			<Form.Item
				name='description'
				label='Description'
				rules={[{ required: true, message: 'Please input the description!' }]}
			>
				<Input.TextArea
					placeholder='Enter description'
					rows={4}
				/>
			</Form.Item>

			<Form.Item
				name='category'
				label='Category'
				rules={[{ required: true, message: 'Please select a category!' }]}
			>
				<Select placeholder='Select a category'>
					<Option value={'Strength'}>Strength</Option>
					<Option value={'Cardio'}>Cardio</Option>
				</Select>
			</Form.Item>

			<Form.Item
				name='muscle_group'
				label='Muscle Group'
				rules={[{ required: true, message: 'Please input the muscle group!' }]}
			>
				<Input placeholder='Enter muscle group' />
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

export default ExerciseForm;
