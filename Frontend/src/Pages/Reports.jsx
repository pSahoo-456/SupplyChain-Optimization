import React from "react";
import NavBar from "../Home/NavBar";

function Reports() {
  return (
    <>
      <div className=" flex flex-col">
        <div>
          <NavBar />
        </div>
        <div className="bg-gray-100 min-h-screen p-6">
          {/* Reports & Compliance Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Reports & Compliance</h2>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h3 className="text-lg font-semibold">Total Reports</h3>
                <p className="text-gray-600">Generated in last 30 days</p>
                <span className="text-green-600 text-xl font-bold">24</span>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h3 className="text-lg font-semibold">Compliance Score</h3>
                <p className="text-gray-600">Based on latest audit</p>
                <span className="text-green-600 text-xl font-bold">98%</span>
              </div>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <h3 className="text-lg font-semibold">Active Alerts</h3>
                <p className="text-gray-600">Requiring attention</p>
                <span className="text-red-600 text-xl font-bold">2</span>
              </div>
            </div>

            {/* Generate Report Button */}
            <div className="mt-4 text-right">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                📄 Generate New Report
              </button>
            </div>
          </div>

          {/* Recent Reports Table */}
          <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold">Recent Reports</h3>
            <table className="w-full mt-4">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Report Name</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Size</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">📄 Q1 2025 Emissions Report</td>
                  <td className="p-2">March 31, 2025</td>
                  <td className="p-2">Quarterly Report</td>
                  <td className="p-2">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-lg">
                      Completed
                    </span>
                  </td>
                  <td className="p-2">2.4 MB</td>
                  <td className="p-2">⬇</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">📄 Supply Chain Carbon Analysis</td>
                  <td className="p-2">March 15, 2025</td>
                  <td className="p-2">Analysis Report</td>
                  <td className="p-2">
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded-lg">
                      Completed
                    </span>
                  </td>
                  <td className="p-2">1.8 MB</td>
                  <td className="p-2">⬇</td>
                </tr>
                <tr>
                  <td className="p-2">📄 Sustainability Compliance Audit</td>
                  <td className="p-2">March 1, 2025</td>
                  <td className="p-2">Audit Report</td>
                  <td className="p-2">
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg">
                      In Review
                    </span>
                  </td>
                  <td className="p-2">3.2 MB</td>
                  <td className="p-2">⬇</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reports;
