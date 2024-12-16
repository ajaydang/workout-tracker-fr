import React from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import {
	UserOutlined,
	AppstoreAddOutlined,
	ScheduleOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Header from '../pages/layout/Header';
import Sidebar from '../pages/layout/Sidebar';

const { Content } = Layout;
const AppWrapper = () => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header />
			<Layout>
				<Sidebar />
				<Layout>
					<Content style={{ margin: '24px 16px 0' }}>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default AppWrapper;
