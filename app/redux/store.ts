import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";
import DataSlice from "./DataSlice";

export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    data: DataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
