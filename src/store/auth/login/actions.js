import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
} from "./actionTypes"

export const loginUser = (user, history) => {
  console.log("loginUser::Réponse du serveur pour la connexion", user);
  // const validUser = users.filter(
  //   usr => usr.email === user.email && usr.password === user.password
  // )
  // if (validUser.length) {
  //   localStorage.setItem("authUser", (JSON.stringify(validUser[0])));
  // }
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = user => {
  console.log("loginSuccess::Réponse du serveur pour la connexion", user);
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

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
