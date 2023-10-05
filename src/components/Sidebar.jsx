import { useState } from 'react';
import SidebarItem from './SiderBarItem';

function Sidebar() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems(prevItems => [...prevItems, newItem.trim()]);
      setNewItem('');
    }
  };

  return (
    <div className="bg-blue-800 text-white w-1/4 h-full p-5">
      <h1 className="text-xl font-bold mb-4">FlexFlow</h1>

      {items.map((item, index) => (
        <SideBarItem key={index} label={item} />
      ))}

      <div className="mt-5">
        <input
          type="text"
          placeholder="Add new item..."
          className="w-full p-2 rounded bg-white text-black"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className="mt-2 w-full bg-blue-700 hover:bg-blue-600 py-2 rounded"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

