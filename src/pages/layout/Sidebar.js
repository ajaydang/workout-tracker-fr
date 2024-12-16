import React from 'react';

import { Layout, Menu } from 'antd';
import {
	UserOutlined,
	AppstoreAddOutlined,
	ScheduleOutlined,
	AppstoreFilled,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
	const { Sider } = Layout;
	const location = useLocation();
	return (
		<Sider
			width={300}
			className='site-layout-background'
		>
			<Menu
				mode='inline'
				selectedKeys={[location.pathname]}
				style={{ height: '100%', borderRight: 0, paddingTop: '40px' }}
			>
				<Menu.Item
					key='/dashboard'
					icon={<AppstoreFilled />}
				>
					<Link to='/dashboard'>Dashboard</Link>
				</Menu.Item>

				<Menu.Item
					key='/exercise'
					icon={<UserOutlined />}
				>
					<Link to='/exercise'>Exercise</Link>
				</Menu.Item>
				<Menu.Item
					key='/workout-plan'
					icon={<AppstoreAddOutlined />}
				>
					<Link to='/workout-plan'>Workout Plan</Link>
				</Menu.Item>
				<Menu.Item
					key='/schedule-workout'
					icon={<ScheduleOutlined />}
				>
					<Link to='/schedule-workout'>Schedule Workout</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
