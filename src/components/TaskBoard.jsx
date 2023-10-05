// import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';

function TaskBoard() {
//   const [tasks, setTasks] = useState([]);
//   const [tasks, setTasks] = useState();

  const sampleTasks = [
    {
      id: 1,
      title: "Set up MongoDB connection",
      description: "Ensure the application connects to MongoDB without errors.",
      assignee: "RH",
      status: "To Do",
      priority: "High"
    },
    {
      id: 2,
      title: "Design the app's main interface",
      description: "Layout the main dashboard, sidebar, and task areas using Tailwind CSS.",
      assignee: "MW",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Implement task CRUD operations",
      description: "Develop the Create, Read, Update, and Delete operations for tasks.",
      assignee: "J",
      status: "In Progress",
      priority: "High"
    },
    {
      id: 4,
      title: "Optimize for mobile",
      description: "Ensure the app's design is responsive and mobile-friendly.",
      assignee: "SV",
      status: "To Do",
      priority: "Low"
    },
    {
      id: 5,
      title: "Write tests for frontend components",
      description: "Create unit tests for React components to ensure they work as expected.",
      assignee: "JR",
      status: "In Progress",
      priority: "Medium"
    },
    {
      id: 6,
      title: "Integrate notifications",
      description: "Implement a notification system to alert users of updates or changes.",
      assignee: "RH",
      status: "To Do",
      priority: "Medium"
    }
  ];


//   setTasks(sampleTasks)
//   useEffect(() => {
//     // Replace with your actual API endpoint
//     fetch('/api/tasks')
//       .then(response => response.json())
//       .then(data => setTasks(data));
//   }, []);

  return (
    <div className="w-3/4 h-full p-5 overflow-y-scroll">
      {sampleTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskBoard;
