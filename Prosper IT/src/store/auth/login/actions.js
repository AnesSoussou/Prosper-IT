import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
} from "./actionTypes"

export const loginUser = (user, history) => {
  console.log("Réponse du serveur pour la connexion", user);
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = (userInfo) => ({
  type: LOGIN_SUCCESS,
  payload: userInfo,
})

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  }
}

export const socialLogin = (type, history) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { type, history },
  };
};
