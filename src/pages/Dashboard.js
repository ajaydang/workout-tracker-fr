import React from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import {
	UserOutlined,
	AppstoreAddOutlined,
	ScheduleOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				width={200}
				className='site-layout-background'
			>
				<Menu
					mode='inline'
					defaultSelectedKeys={['1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<Menu.Item
						key='1'
						icon={<UserOutlined />}
					>
						Exercise
					</Menu.Item>
					<Menu.Item
						key='2'
						icon={<AppstoreAddOutlined />}
					>
						Workout Plan
					</Menu.Item>
					<Menu.Item
						key='3'
						icon={<ScheduleOutlined />}
					>
						Schedule Workout
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header className='header'>
					<div className='logo' />
					<div className='profile-icon'>
						{/* Profile Icon */}
						<UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
					</div>
				</Header>
				<Content style={{ margin: '24px 16px 0' }}>
					<div className='content-container'>
						<Row gutter={16}>
							<Col span={8}>
								<Card
									title='Exercise Count'
									bordered={false}
									className='card exercise-card'
								>
									10 Exercises
								</Card>
							</Col>
							<Col span={8}>
								<Card
									title='Workout Plan'
									bordered={false}
									className='card workout-card'
								>
									5 Plans Available
								</Card>
							</Col>
							<Col span={8}>
								<Card
									title='Scheduled Workouts'
									bordered={false}
									className='card schedule-card'
								>
									3 Scheduled
								</Card>
							</Col>
						</Row>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
