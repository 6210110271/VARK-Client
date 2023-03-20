import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";
import scoreReducer, {ScoreState} from "./score.reducer";
import userReducer, {UserState} from "./user.reducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  scoreReducer,
  userReducer
});

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
  scoreReducer: ScoreState;
  userReducer: UserState;
}
