import { useState } from "react";
import NavBar from "../Home/NavBar";

export default function RouteOptimization() {
  const [routeDetails, setRouteDetails] = useState({
    origin: "",
    destination: "",
    vehicleType: "Tata Primat",
    totalWeight: 0,
  });

  const handleChange = (e) => {
    setRouteDetails({ ...routeDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Optimizing Route...", routeDetails);
  };

  return (
    <>
      <div className=" flex flex-col">
        <div className=" w-full  opacity-90  z-30">
          <NavBar />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
          {/* Left Section - Route Details */}
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Route Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="origin"
                placeholder="Enter origin location"
                value={routeDetails.origin}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                value={routeDetails.destination}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <select
                name="cargoType"
                value={routeDetails.cargoType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Tata Prima">Tata Prima</option>
                <option value="BharatBenz">BharatBenz</option>
                <option value="Mahindra Blazo X 55">Mahindra Blazo X 55</option>
                <option value="Ashok Leyland Partner">
                  Ashok Leyland Partner
                </option>
                <option value="Eicher">Eicher</option>
              </select>
              <input
                type="number"
                name="totalWeight"
                value={routeDetails.totalWeight}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Optimize Route
              </button>
            </form>
          </div>

          {/* Right Section - Route Map & Recommendations */}
          <div className="flex-1 space-y-6">
            {/* Google Map */}
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Route Map</h2>
              <iframe
                className="w-full h-72 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.7632676699384!2d85.82721887499712!3d20.29605908118347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909be33333333%3A0x8a6e5a0f3b24ef80!2sBhubaneswar%2C%20Odisha%2C%20India!5e0!3m2!1sen!2sus!4v1709098765432"
                loading="lazy"
              ></iframe>
            </div>

            {/* Optimized Route & Vehicle Recommendation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  🚛 Optimized Route
                </h3>
                <p className="text-gray-600">
                  Total Distance: <b>450 km</b>
                </p>
                <p className="text-gray-600">
                  Estimated Time: <b>5h 30m</b>
                </p>
                <p className="text-gray-600">
                  Carbon Footprint: <b>2.3 tCO2e</b>
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  🚗 Vehicle Recommendation
                </h3>
                <p className="text-gray-600">
                  Type: <b>Electric Heavy-Duty Truck</b>
                </p>
                <p className="text-gray-600">
                  Capacity: <b>20 tons</b>
                </p>
                <p className="text-gray-600">
                  Emissions Rating: <b>A+</b>
                </p>
              </div>
            </div>

            {/* Environmental Awareness Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Environmental Awareness
              </h2>
              <img className="w-full h-80 rounded-lg" src="./truck1.bmp"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
