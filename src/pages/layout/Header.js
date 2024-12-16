import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const Header = () => {
	const { Header } = Layout;

	return (
		<Header className='header'>
			<div className='logo'>Workout Tracker </div>
			<div className='profile-icon'>
				{/* Profile Icon */}
				<UserOutlined style={{ fontSize: '24px', color: '#fff' }} />
			</div>
		</Header>
	);
};

export default Header;
