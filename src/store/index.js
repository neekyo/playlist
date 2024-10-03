import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSong(state, action) {
			state.push(action.payload);
		},
		removeSong(state, action) {
			//
		},
	},
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
	},
});

// actionCreators
console.log(songsSlice.actions.addSong('Song 1'));

const startingState = store.getState();
console.log(JSON.stringify(startingState));

// store.dispatch({
// 	type: 'song/addSong',
// 	payload: 'New Song!',
// });

store.dispatch(songsSlice.actions.addSong('Some song'));

const finalState = store.getState();
console.log(JSON.stringify(finalState));
