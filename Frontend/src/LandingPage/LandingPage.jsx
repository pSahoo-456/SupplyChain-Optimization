import React from 'react';
import { Leaf, BarChart3, Globe2, ArrowRight, TreePine, Factory, Car } from 'lucide-react';
import {NavLink} from 'react-router-dom'
function App() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 bg-gray-900">
          <img
            src="./truck1.bmp"
            alt="Forest background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-black mb-6">
              Track & Reduce Your Carbon Footprint
            </h1>
            <p className="text-xl  text-black max-w-2xl mx-auto mb-8">
              Join the global movement towards a sustainable future. Monitor, understand, and reduce your carbon emissions with our innovative platform.
            </p>
            <NavLink to={'/signup'} className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Carbon Tracking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Monitor your carbon footprint across multiple sectors and get personalized recommendations for reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" p-8 bg-fuchsia-200 rounded-xl shadow-sm hover:shadow-md transition-all transform ease-in-out duration-500 hover:scale-110">
              <Factory className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industrial Impact</h3>
              <p className="text-gray-600">Track and optimize your industrial carbon emissions with real-time monitoring.</p>
            </div>
            <div className="p-8 bg-yellow-200  rounded-xl shadow-sm hover:shadow-md transition-all transform ease-in-out duration-500 hover:scale-110">
              <Car className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transport Emissions</h3>
              <p className="text-gray-600">Calculate and reduce your transportation-related carbon footprint.</p>
            </div>
            <div className="p-8 bg-green-200 rounded-xl shadow-sm hover:shadow-md transition-all transform ease-in-out duration-500 hover:scale-110">
              <TreePine className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Offset Programs</h3>
              <p className="text-gray-600">Participate in verified carbon offset programs to neutralize your impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <BarChart3 className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Carbon Emissions Tracked</div>
            </div>
            <div>
              <Globe2 className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <Leaf className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600">Trees Planted</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations and individuals committed to reducing their carbon footprint.
          </p>
          <NavLink to={'/signup'} className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2">
            Start Your Journey <ArrowRight className="h-5 w-5" />
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">CarbonTrack</span>
            </div>
            <div className="text-sm">
              © 2024 CarbonTrack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;