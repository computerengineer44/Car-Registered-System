import { configureStore } from '@reduxjs/toolkit'
import carsReducer from '../carsReducer' // Örnek bir reducer import
import userReducer from '../userReducer' // Örnek bir reducer import
import imageReducer from '../imageReducer' // Örnek bir reducer import
import { applyMiddleware } from 'redux' // Redux middleware eklemek için gerekli

// Özel bir middleware işlevi
const customMiddleware = (store) => (next) => (action) => {
  console.log('Middleware çalıştı:', action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    cars: carsReducer, // Örnek bir reducer
    user: userReducer, // Örnek bir reducer
    images: imageReducer, // Örnek bir reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware), // Özel middleware'i kullan
  devTools: process.env.NODE_ENV !== 'production', // Sadece geliştirme ortamında Redux DevTools'u etkinleştir
  // Diğer yapılandırma seçeneklerini burada ekleyebilirsiniz.
})
