import Sidebar from './Sidebar';
import TaskBoard from './TaskBoard';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <TaskBoard />
    </div>
  );
}

export default Dashboard;