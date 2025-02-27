// import { create } from 'zustand';

// export const useStore = create((set, get) => ({
//   products: [],
//   store: null,

//   addProduct: (product) =>
//     set((state) => ({ products: [...state.products, product] })),

//   updateProduct: (product) =>
//     set((state) => ({
//       products: state.products.map((p) => (p.id === product.id ? product : p)),
//     })),

//   removeProduct: (id) =>
//     set((state) => ({
//       products: state.products.filter((p) => p.id !== id),
//     })),

//   setStore: (store) => set({ store }),

//   getLowStockProducts: () => {
//      const { products } = get();
//      console.log('products-->',products)
//     return products.filter((product) => product.stock <= product.minStock);
//   },
// }));
