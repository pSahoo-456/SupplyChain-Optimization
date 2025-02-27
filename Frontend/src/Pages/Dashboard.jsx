// import React, { useEffect, useState } from "react";
// import { QRCodeSVG } from "qrcode.react";
// import {
//   AlertTriangle,
//   Package,
//   TrendingUp,
//   ShoppingCart,
//   Clock,
//   ChevronRight,
//   IndianRupee,
//   X,
// } from "lucide-react";
// import { useAuthStore } from "../contentStore/authStore.js";
// import { useProductStore } from "../contentStore/productStore.js";

// export function Dashboard() {
//   const { user } = useAuthStore();
//   const { products, checkProducts, lowStockProducts } = useProductStore();
//   const [viewAlert, setViewAlert] = useState(false);

//   useEffect(() => {
//     checkProducts();
//   }, []);

//   const totalProducts = products.length;
//   const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
//   const totalValue = products.reduce(
//     (acc, product) => acc + product.price * product.stock,
//     0
//   );
//   const topSellingProducts = [...products]
//     .sort((a, b) => b.stock - a.stock)
//     .slice(0, 5);
//   return (
//     <div className="space-y-8" >
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-950 to-indigo-800 rounded-2xl p-8 text-white">
//         <div className="max-w-3xl">
//           <h1 className="text-3xl font-bold mb-4">
//             Welcome to {user.shopname}
//           </h1>
//           <p className="text-indigo-100 mb-6">
//             Manage your inventory efficiently and track your stock in real-time
//           </p>
//           <div className="flex items-center space-x-4">
//             <div className="bg-white p-4 rounded-lg">
//               <QRCodeSVG value={window.location.origin || ""} size={100} />
//             </div>
//             {/* <div>{window.location.origin}</div> */}
//             <div className="flex-1">
//               <h3 className="font-medium mb-2">Quick Access QR Code</h3>
//               <p className="text-sm text-indigo-100">
//                 Scan to instantly access your inventory system from any device
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className=" flex justify-start rounded-xl shadow-xl p-6 border border-gray-100 h-40 bg-blue-300 transition-all duration-500 ease-in-out hover:scale-110">
//           <div className="flex items-center ">
//             <div className="bg-blue-50 p-3 rounded-lg">
//               <Package className="h-6 w-6 text-blue-600" />
//             </div>
//             <div className="ml-4">
//               <p className="text-xl font-semibold text-gray-950">
//                 Total Products
//               </p>
//               <h3 className="text-xl font-bold text-gray-900">
//                 {totalProducts}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-start rounded-xl shadow-xl p-6 border border-gray-100 h-40 bg-green-300 transition-all duration-500 ease-in-out hover:scale-110">
//           <div className="flex items-center">
//             <div className="bg-green-50 p-3 rounded-lg">
//               <ShoppingCart className="h-6 w-6 text-green-600" />
//             </div>
//             <div className="ml-4">
//               <p className="text-xl font-semibold text-gray-950">Total Stock</p>
//               <h3 className="text-xl font-bold text-gray-900">{totalStock}</h3>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-start rounded-xl shadow-xl p-6 border border-gray-100 h-40 bg-purple-300 transition-all duration-500 ease-in-out hover:scale-110">
//           <div className="flex items-center">
//             <div className="bg-purple-50 p-3 rounded-lg">
//               <IndianRupee className="h-6 w-6 text-purple-600" />
//             </div>
//             <div className="ml-4">
//               <p className="text-xl font-semibold text-gray-950">
//                 Inventory Value
//               </p>
//               <h3 className="text-xl font-bold text-gray-900">
//                 ₹{totalValue.toFixed(2)}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div
//           className="flex justify-start rounded-xl shadow-xl p-6 border border-gray-100 h-40 bg-red-200 transition-all duration-500 ease-in-out hover:scale-110"
//           onClick={() => setViewAlert(true)}
//         >
//           <div className="flex items-center">
//             <div className="bg-red-50 p-3 rounded-lg">
//               <AlertTriangle className="h-6 w-6 text-red-600" />
//             </div>
//             <div className="ml-4">
//               <p className="text-xl font-semibold text-gray-950">
//                 Low Stock Items
//               </p>
//               <h3 className="text-xl font-bold text-gray-900">
//                 {lowStockProducts.length}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Top Selling Products */}
//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-sm border border-gray-100">
//           <div className="p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-xl font-bold text-gray-100">
//                 Top Selling Products
//               </h2>
//               <TrendingUp className="h-7 w-7 text-gray-200" />
//             </div>
//             <div className="space-y-4">
//               {topSellingProducts.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between p-4 bg-gray-300 rounded-lg transition-all duration-500 ease-in-out hover:scale-110"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="bg-white p-2 rounded-md">
//                       <Package className="h-6 w-6 text-gray-800" />
//                     </div>
//                     <div>
//                       <p className="font-bold text-sl text-gray-900">
//                         {product.name}
//                       </p>
//                       <p className="text-lg text-gray-500">
//                         {product.category}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="font-medium text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </p>
//                     <p className="text-sm text-gray-800">
//                       Stock: {product.stock}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Low Stock Alerts */}
//         {lowStockProducts.length > 0 && viewAlert && (
//           // <div className="bg-gray bg-opacity-75 flex items-center justify-center w-full h-full rounded-4xl">
//           <div
//             className="absolute top-0 inset-0 bg-gradient-to-r from-cyan-600 to-red-400 rounded-xl shadow-sm border border-gray-100 w-[40%] h-[70%] m-auto overflow-scroll"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Low Stock Alerts
//                 </h2>
//                 <X
//                   className="right-3 w-8 h-8 transition-all duration-500 ease-in-out hover:scale-125"
//                   onClick={() => setViewAlert(false)}
//                 />
//               </div>
//               <div className="space-y-4">
//                 {lowStockProducts.map((product, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div className="bg-white p-2 rounded-md">
//                         <AlertTriangle className="h-6 w-6 text-red-500" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-lg text-gray-900">
//                           {product.name}
//                         </p>
//                         <p className="text-md font-semibold text-red-600">
//                           Current Stock: {product.stock} / Minimum:{" "}
//                           {product.minStock}
//                         </p>
//                       </div>
//                     </div>
//                     <ChevronRight className="h-5 w-5 text-gray-400" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           // </div>
//         )}
//       </div>
//     </div>
//   );
// }
