import React from 'react';
import { Outlet } from 'react-router-dom';
// import Sidebar from '../components/sidebar/Sidebar';

const AppWrapper = () => {
	return (
		<>
			<div className=''>
				<div className='guide-wrapper d-flex'>
					<div className='guide-content'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default AppWrapper;
