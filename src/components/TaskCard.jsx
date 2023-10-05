function TaskCard({ task }) {
  return (
    <div className="bg-white p-4 m-2 rounded shadow-lg">
      <div className="text-lg font-medium">{task.title}</div>
      <div className="text-sm mt-2">{task.assignee}</div>
    </div>
  );
}

export default TaskCard;
