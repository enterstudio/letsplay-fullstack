import { 
	MANUAL_LOGIN_USER,
	LOGIN_SUCCESS_USER,
	LOGIN_ERROR_USER,
	SIGNUP_USER,
	SIGNUP_SUCCESS_USER,
	SIGNUP_ERROR_USER,
	LOGOUT_USER,
	LOGOUT_SUCCESS_USER,
	LOGOUT_ERROR_USER,
	REGISTER_USER,
	REGISTER_SUCCESS_USER,
	REGISTER_ERROR_USER,
	DELETE_GAME,
	ADD_GAME,
	FETCH_FRIENDS
} from "../constants";

const user = (state = {
	isWaiting: false,
	authenticated: false,
	email: "",
	player: ""
}, action) => {
	switch(action.type) {
		case MANUAL_LOGIN_USER:
			return Object.assign({}, state, { isWaiting: true });
		case LOGIN_SUCCESS_USER:
			console.log(action);
			return Object.assign({}, state, { isWaiting: false, authenticated: true, email: action.data.email, player: action.data.player });
		case LOGIN_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false });
		case SIGNUP_USER:
			return Object.assign({}, state, { isWaiting: true });
		case SIGNUP_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: true });
		case SIGNUP_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false });
		case LOGOUT_USER:
			return Object.assign({}, state, { isWaiting: true });
		case LOGOUT_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false, email: "" });
		case LOGOUT_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: true });
		case REGISTER_USER:
			return Object.assign({}, state, { isWaiting: true });
		case REGISTER_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false });
		case REGISTER_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false });
		case DELETE_GAME:
			return {
				...state,
				player: {
					...state.player,
					list: state.player.list.filter(game => game.id !== action.id)
				}
			}
		case ADD_GAME:
			return {
				...state,
				player: {
					...state.player,
					list: state.player.list.concat(action.game)
				}
			}
		case FETCH_FRIENDS:
			return {
					...state,
					player: {
						...state.player,
						friends: action.data.player.friends
					}
				}
		default:
			return state;
	}
}

export default user;