import { createAction } from '@reduxjs/toolkit';
import { reset } from '../actions';

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
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return [];
		});
	},
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
