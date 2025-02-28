import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaChartBar, FaTasks, FaBox, FaNewspaper, FaCog, FaSignOutAlt } from "react-icons/fa";

const data = [
  { name: "Day 1", sales: 10 },
  { name: "Day 3", sales: 40 },
  { name: "Day 5", sales: 25 },
  { name: "Day 7", sales: 60 },
  { name: "Day 9", sales: 45 },
  { name: "Day 11", sales: 80 },
];

const pieData = [{ name: "Sales", value: 75 }, { name: "Remaining", value: 25 }];
const COLORS = ["#00C49F", "#EEE"];

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <motion.aside initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className="w-64 bg-gradient-to-b from-teal-400 to-cyan-500 text-white p-6 space-y-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full mb-2"></div>
          <h2 className="font-bold text-lg">USERNAME</h2>
          <p className="text-sm opacity-75">Lorem Ipsum Dolor</p>
        </div>
        <nav className="space-y-4">
          <NavItem icon={<FaChartBar />} title="Dashboard" />
          <NavItem icon={<FaTasks />} title="Statistic" />
          <NavItem icon={<FaBox />} title="Task Order" />
          <NavItem icon={<FaNewspaper />} title="News" />
          <NavItem icon={<FaCog />} title="Setting" />
        </nav>
        <button className="flex items-center gap-2 mt-6 text-white opacity-80 hover:opacity-100">
          <FaSignOutAlt /> Go Out
        </button>
      </motion.aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <h1 className="text-teal-600 font-bold text-xl mb-4">Hello <span className="font-extrabold">Username</span>, Welcome Back!</h1>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sales Chart */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-3xl font-bold text-teal-500">750.11 <span className="text-sm text-gray-500">USD</span></p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#00C49F" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Percentage Sales */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold">Percentage Sales</h3>
            <PieChart width={150} height={150}>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#00C49F">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
            <p className="text-2xl font-bold text-teal-500">75%</p>
          </motion.div>

          {/* Top Sales */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Top 5 Sales</h3>
            <ul className="mt-2">
              {["$155", "$145", "$125", "$115", "$105"].map((price, index) => (
                <li key={index} className="flex justify-between py-1 border-b">
                  <span>Lorem Ipsum {index + 1}</span>
                  <span className="font-semibold">{price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Recent News & Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Recent News */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Recent News</h3>
            <ul className="mt-2 space-y-3">
              {["Sunday 7:00 pm", "Friday 5:00 pm", "Wednesday 3:00 pm"].map((time, index) => (
                <li key={index} className="border p-2 rounded-lg hover:bg-gray-100 transition">
                  <span className="font-semibold">Username</span> <span className="text-gray-500 text-sm">({time})</span>
                  <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet.</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Calendar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">December</h3>
            <div className="grid grid-cols-7 gap-2 mt-2 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                <span key={index} className="text-gray-500 font-semibold">{day}</span>
              ))}
              {[...Array(31).keys()].map((day) => (
                <div key={day} className="py-2 px-3 rounded-md bg-gray-200 hover:bg-teal-300 hover:text-white transition cursor-pointer">
                  {day + 1}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

// Sidebar Item Component
const NavItem = ({ icon, title }) => (
  <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2 p-2 bg-white text-teal-500 rounded-md shadow-md cursor-pointer hover:bg-teal-500 hover:text-white transition">
    {icon} {title}
  </motion.div>
);

export default Dashboard;
