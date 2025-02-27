// import React, { useEffect, useState } from "react";
// import { Plus, Edit2, Trash2 } from "lucide-react";
// import { useProductStore } from "../contentStore/productStore";
// import { useAuthStore } from "../contentStore/authStore";
// export function Products() {
//   const [isAddingProduct, setIsAddingProduct] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   //  const { user,checkauth } = useAuthStore();
//   const {
//     products,
//     addProducts,
//     removeProducts,
//     updateProducts,
//     getLowStockProducts,
//     lowStockProducts,
//     checkProducts,
//   } = useProductStore();
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: 0,
//     stock: 0,
//     minStock: 0,
//     category: "",
//     color: "",
//   });
//   useEffect(() => {
//     checkProducts();
//   }, [formData, products]);
//   console.log("low stock-->", lowStockProducts);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("formData--:", formData);
//     if (editingProduct) {
//       //updateProduct({ ...editingProduct, ...formData });
//       updateProducts({
//         ...formData,
//       });
//       console.log("after Update -->", formData);
//       setEditingProduct(null);
//     } else {
//       addProducts({
//         ...formData,
//       });
//     }
//     setFormData({
//       name: "",
//       description: "",
//       price: 0,
//       stock: 0,
//       minStock: 0,
//       category: "",
//       color: "",
//     });
//     setIsAddingProduct(false);
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setFormData(product);
//     setIsAddingProduct(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold text-gray-900">P r o d u c t s</h2>
//         <button
//           onClick={() => setIsAddingProduct(true)}
//           className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           <Plus className="h-4 w-4 mr-2" />
//           Add Product
//         </button>
//       </div>
//       {isAddingProduct && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center h-screen">
//           <div className="bg-gray-200 rounded-lg p-6 max-w-md w-full">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">
//               {editingProduct ? "Edit Product" : "Add New Product"}
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="mt-1 block w-full py-1.5 rounded-md border-gray-500 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                   className="mt-1   block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Price
//                   </label>
//                   <input
//                     type="number"
//                     value={formData.price}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         price: parseFloat(e.target.value),
//                       })
//                     }
//                     className="mt-1 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Stock
//                   </label>
//                   <input
//                     type="number"
//                     value={formData.stock}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         stock: parseInt(e.target.value),
//                       })
//                     }
//                     className="mt-1 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Minimum Stock
//                   </label>
//                   <input
//                     type="number"
//                     value={formData.minStock}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         minStock: parseInt(e.target.value),
//                       })
//                     }
//                     className="mt-1 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.category}
//                     onChange={(e) =>
//                       setFormData({ ...formData, category: e.target.value })
//                     }
//                     className="mt-1 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   color
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.color}
//                   onChange={(e) =>
//                     setFormData({ ...formData, color: e.target.value })
//                   }
//                   className="mt-1 py-1.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsAddingProduct(false);
//                     setEditingProduct(null);
//                     setFormData({
//                       name: "",
//                       description: "",
//                       price: 0,
//                       stock: 0,
//                       minStock: 0,
//                       category: "",
//                       color: "",
//                     });
//                   }}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   {editingProduct ? "Update" : "Add"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="bg-white shadow rounded-lg">
//         <div className="flex flex-col">
//           <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//               <div className="shadow overflow-hidden border-b-2 border-gray-600 sm:rounded-lg">
//                 <table className="min-w-full divide-y  divide-cyan-950">
//                   <thead className="bg-gray-50">
//                     <tr className="p-2.5">
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         Product
//                       </th>
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         Category
//                       </th>
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         Price
//                       </th>
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         Stock
//                       </th>
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         color
//                       </th>
//                       <th className="px-6 py-3 text-left text-lg font-extrabold text-gray-700 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-700 ">
//                     {products.map((product, index) => (
//                       <tr
//                         key={index}
//                         className=" border-b-2 border-r-emerald-950 mt-2"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="text-md font-extrabold text-gray-900">
//                             {product.name}
//                           </div>
//                           <div className="text-md text-gray-700">
//                             {product.description}
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-800">
//                           {product.category}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-800">
//                           ${product.price.toFixed(2)}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-2 inline-flex font-semibold text-md text-gray-800 leading-5 rounded-full ${
//                               product.stock <= product.minStock
//                                 ? "bg-red-100 text-red-800"
//                                 : "bg-green-100 text-green-800"
//                             }`}
//                           >
//                             {product.stock}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-gray-800">
//                           {product.color}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                           <button
//                             onClick={() => handleEdit(product)}
//                             className="text-indigo-600 hover:text-indigo-900 mr-4"
//                           >
//                             <Edit2 className="h-4 w-4" />
//                           </button>
//                           <button
//                             onClick={() => removeProduct(product.id)}
//                             className="text-red-600 hover:text-red-900"
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
