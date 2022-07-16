import { configureStore } from "@reduxjs/toolkit";
import headerData from "./headerData";

console.log('aa');
export const store = configureStore({
  reducer: {
    headerData
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
});
if (store) {
  console.log('hello')
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;