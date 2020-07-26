
// === action without payload
// export const TOGGLE_EDITING = "TOGGLE_EDITING";
// export const toggleEditing = () => {
//   return { type: TOGGLE_EDITING };
// };

//  === action with payload ===
// export const UPDATE_TITLE = "UPDATE_TITLE";
// export const updateTitle = newTitle => {
//   return { type: UPDATE_TITLE, payload: newTitle };
// };

// === Async Actions ====
// const asyncOperation = data => dispatch => {
// 	axios.post('/api/data-call', data)
// 		.then( res => {
// 			dispatch({type: CALL_SUCCESS, payload: red.data });
// 		})
// 		.catch( err => {
// 			dispatch({ type: CALL_FALIURE, payload: err.response });
// 		})}