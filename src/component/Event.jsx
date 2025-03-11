import React, { useState, useEffect } from 'react';

const Event = () => {
  const initialEvents = JSON.parse(localStorage.getItem('events')) || [
    { id: 1, title: 'Community Prayer', date: '2025-04-10', location: 'Central Park', category: 'Religious', description: 'Join us for a community prayer gathering.' },
    { id: 2, title: 'Food Drive', date: '2025-04-15', location: 'City Hall', category: 'Charity', description: 'Help distribute food to those in need.' },
    { id: 3, title: 'Social Meetup', date: '2025-04-20', location: 'Community Center', category: 'Social', description: 'Meet and connect with like-minded individuals.' }
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filteredCategory, setFilteredCategory] = useState('All');
  const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '', location: '', description: '' });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleFilterChange = (e) => {
    setFilteredCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.category) {
      const updatedEvents = [...events, { id: Date.now(), ...newEvent }];
      setEvents(updatedEvents);
      setNewEvent({ title: '', date: '', category: '', location: '', description: '' });
    }
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  const filteredEvents = filteredCategory === 'All' ? events : events.filter(event => event.category === filteredCategory);

  return (
    <div className="p-10 bg-gray-100 min-h-[500px] flex">
      
      {/* Add New Event Form - Smaller Width */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Add New Event</h2>
        <form onSubmit={handleAddEvent} className="mt-4 space-y-3">
          <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required />
          <select name="category" value={newEvent.category} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500" required>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">Add Event</button>
        </form>
      </div>

      {/* Event List - Larger Width */}
      <div className="w-2/3 pl-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Event Listings</h1>

        {/* Filter Events */}
        <div className="mt-4 flex justify-center">
          <select className="p-2 border rounded-md focus:ring-2 focus:ring-blue-500" onChange={handleFilterChange}>
            <option value="All">All Categories</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>

        {/* Event Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow-md relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.date} - {event.location}</p>
              <p className="text-gray-500 mt-2">{event.description}</p>
              <button 
                onClick={() => handleDeleteEvent(event.id)} 
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Event;
