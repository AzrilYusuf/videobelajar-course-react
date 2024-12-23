import { useAdminStore } from "../../../stores/adminStore";

const Dashboard: React.FC = () => {
	const { allAdmins, allUsers } = useAdminStore((state) => state);

	return (
		<div>
			<h2>Dashboard</h2>
			<div className='card-dashboard-wrap'>
				<div className='card-dashboard'>
					<h3>Total Admin</h3>
					<p>{allAdmins.length}</p>
				</div>
				<div className='card-dashboard'>
					<h3>Total Users</h3>
					<p>{allUsers.length}</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
