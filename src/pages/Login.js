import { Card, Flex, Typography } from 'antd';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { loginUser } from '../services/user';

const Login = () => {
	const { Title, Paragraph, Text, Link } = Typography;

	const onFinish = async (values) => {
		const payload = {
			email: values.email,
			password: values.password,
		};
		const { data } = await loginUser(payload);

		if (data.data.token) {
			localStorage.setItem('workout-tracker-token', data.data.token);
			window.location.href = 'http://localhost:3000/dashboard';
		} else {
			throw Error('Form Error.');
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
	};
	return (
		<Flex>
			<Card title='Login'>
				<Form
					name='basic'
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						maxWidth: 600,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
					validateMessages={validateMessages}
				>
					<Form.Item
						label='Email'
						name='email'
						rules={[
							{
								required: true,
								type: 'email',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					{/* <Form.Item
						name='remember'
						valuePropName='checked'
						label={null}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item> */}

					<Form.Item label={null}>
						<Button
							type='primary'
							htmlType='submit'
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</Flex>
	);
};

export default Login;
