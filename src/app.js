const { useState } = React;

function TopNav() {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-3 w-full">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-green-700">StewardTrack</span>
      </div>
      <div className="flex-1 mx-4">
        <input type="text" placeholder="Search" className="w-full max-w-md px-3 py-2 border rounded" />
      </div>
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/32" className="h-8 w-8 rounded-full" alt="profile" />
          <span className="font-semibold">John Doe</span>
        </div>
        {/* Settings Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.573 1.066c.855-.547 1.988.342 1.64 1.261a1.724 1.724 0 001.023 2.272c.95.368.95 1.603 0 1.972a1.724 1.724 0 00-1.023 2.272c.347.92-.785 1.808-1.64 1.261a1.724 1.724 0 00-2.573 1.066c-.3.921-1.603.921-1.902 0a1.724 1.724 0 00-2.573-1.066c-.855.547-1.988-.342-1.64-1.261a1.724 1.724 0 00-1.023-2.272c-.95-.368-.95-1.603 0-1.972a1.724 1.724 0 001.023-2.272c-.347-.92.785-1.808 1.64-1.261.97.621 2.243.07 2.573-1.066z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

function Sidebar() {
  const menu = [
    'Dashboard',
    'Financial Overview',
    'Tithes & Offerings',
    'Expenses',
    'Financial Reports',
    'Members',
    'Attendance',
    'Events'
  ];
  return (
    <aside className="w-64 bg-gradient-to-b from-green-700 to-green-500 text-white flex flex-col justify-between fixed h-screen p-4">
      <nav className="space-y-2">
        {menu.map((item, idx) => (
          <a key={item} href="#" className={`block px-3 py-2 rounded hover:bg-green-600 ${idx === 0 ? 'bg-green-600' : ''}`}>{item}</a>
        ))}
      </nav>
      <div className="mt-4 border-t border-green-400 pt-4">
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/32" className="h-8 w-8 rounded-full" alt="profile" />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function StatCard({title, value, color, icon}) {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center space-x-4">
      <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Welcome() {
  return <h1 className="text-2xl font-semibold mb-4">Welcome back, Pastor Juan!</h1>;
}

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Income"
        value="₱1,380,000.00"
        color="green"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V5m0 7v3m4 4H8a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>}
      />
      <StatCard
        title="Total Expenses"
        value="₱472,000.00"
        color="red"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m3 8H8a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>}
      />
      <StatCard
        title="Active Members"
        value="342"
        color="blue"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20h6m-6 0H4v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a3 3 0 11-6 0 3 3 0 016 0zM6 10a3 3 0 100 6 3 3 0 000-6z" /></svg>}
      />
      <StatCard
        title="Upcoming Events"
        value="12"
        color="purple"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
      />
    </div>
  );
}

function ChartSection() {
  return (
    <div className="bg-white rounded shadow p-4 col-span-2">
      <h2 className="text-lg font-semibold mb-2">Financial Overview</h2>
      <div className="h-48 bg-gray-100 flex items-center justify-center rounded mb-4">
        <span className="text-gray-500">[Area Chart]</span>
      </div>
      <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">View Details</button>
    </div>
  );
}

function RecentActivity() {
  const activities = ['Offering recorded', 'New member added', 'Event scheduled'];
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
      <ul className="list-disc list-inside space-y-1">
        {activities.map(act => <li key={act}>{act}</li>)}
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
      <div className="space-y-2">
        <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Record Offering</button>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Member</button>
        <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Schedule Event</button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="lg:ml-64 p-4">
      <Welcome />
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <ChartSection />
        <div className="lg:col-span-1 space-y-4">
          <RecentActivity />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col" style={{marginLeft: '16rem'}}>
        <TopNav />
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
