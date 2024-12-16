import React from 'react';
import { Layout, Card, Row, Col } from 'antd';

const { Content } = Layout;

const Dashboard = () => {
	return (
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
	);
};

export default Dashboard;
