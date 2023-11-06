import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
