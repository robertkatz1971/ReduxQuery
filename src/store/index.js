import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { fetchUsers } from './thunks/fetchUsers';
export { addUser } from './thunks/addUser';
export { removeUser } from './thunks/removeUser';
