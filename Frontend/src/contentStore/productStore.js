// import { create } from 'zustand'
// import { useAuthStore } from './authStore'
// import axios from 'axios'
// export const useProductStore = create((set,get) => ({
//     products: [],
//     lowStockProducts: [],
//     addProducts: async (details) => {
//         try {
//             const response = await axios.post('/api/v1/product/add', details)
//             console.log(response.data.user)
//         } catch (error) {
//             console.log(error.message)
//         }
//     },
//     removeProducts: async () => { },
//     updateProducts: async (details) => {
//         try {
//             console.log('start !!!')
//             const response = await axios.post('/api/v1/product/update', details)
//             console.log(response.data.data)
//             set({ products: response.data.data })
//         } catch (error) {
//             console.log(error)
//         }
//     },
//     // getLowStockProducts: () => {
//     //      const products = get().products
//     //      const lowStockProducts = get().lowStockProducts
//     //      console.log('before update->',lowStockProducts)
//     //     set({lowStockProducts:products.filter((item)=>item.stock<=item.minStock)})
//     //     console.log('after update->',lowStockProducts)
//     //  },
//     checkProducts: async () => {
//         try {
//             console.log('Heyyyyy')
//             const response = await axios.get('api/v1/auth/authCheck')
//             set({ products: response.data.user.productsList })
//             const products = get().products
//             set({lowStockProducts:products.filter((item)=>item.stock<=item.minStock)})

//         } catch (error) {
//             console.log('error in authChek ', error.message)
//             set({ products: [] })

//         }
//     },

// }))