import { useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { addSong } from '../store';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			// action.payload === string
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
	},
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
