import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AppWrapper from './AppWrapper';
import { JWT_LOGIN_TOKEN } from '../constant/constant';
import Exercise from '../pages/exercise/Exercise';
import ExerciseAdd from '../pages/exercise/ExerciseAdd';

export default function AppRouter() {
	const isLoggedIn = !!localStorage.getItem(JWT_LOGIN_TOKEN);

	console.log(isLoggedIn);

	return (
		<Routes>
			{/* Public Routes */}
			<Route
				path='/login'
				element={
					<PublicRoute isLoggedIn={isLoggedIn}>
						<Login />
					</PublicRoute>
				}
			/>

			{/* Protected Routes */}
			<Route
				path='/'
				element={
					<ProtectedRoute isLoggedIn={isLoggedIn}>
						<AppWrapper />
					</ProtectedRoute>
				}
			>
				<Route
					index
					element={
						<Navigate
							to='/dashboard'
							replace
						/>
					}
				/>
				<Route
					path='dashboard'
					element={<Dashboard />}
				/>
				<Route
					path='exercise'
					element={<Exercise />}
				/>
				<Route
					path='exercise/add'
					element={<ExerciseAdd />}
				/>
			</Route>

			{/* 404 Route */}
			<Route
				path='*'
				element={
					<Navigate
						to={isLoggedIn ? '/dashboard' : '/login'}
						replace
					/>
				}
			/>
		</Routes>
	);
}
