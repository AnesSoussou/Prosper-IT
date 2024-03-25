import {
  GET_CLIENTS,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  ADD_NEW_CLIENT,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAIL,
  UPDATE_CLIENT,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAIL,
  DELETE_CLIENT,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL,
} from "./actionTypes";

export const getClients = () => ({
  type: GET_CLIENTS,
});

export const getClientsSuccess = clients => ({
  type: GET_CLIENTS_SUCCESS,
  payload: clients,
});

export const getClientsFail = error => ({
  type: GET_CLIENTS_FAIL,
  payload: error,
});

export const addNewClient = client => ({
  type: ADD_NEW_CLIENT,
  payload: client,
});

export const addClientSuccess = client => ({
  type: ADD_CLIENT_SUCCESS,
  payload: client,
});

export const addClientFail = error => ({
  type: ADD_CLIENT_FAIL,
  payload: error,
});

export const updateClient = client => ({
  type: UPDATE_CLIENT,
  payload: client,
});

export const updateClientSuccess = client => ({
  type: UPDATE_CLIENT_SUCCESS,
  payload: client,
});

export const updateClientFail = error => ({
  type: UPDATE_CLIENT_FAIL,
  payload: error,
});

export const deleteClient = client => ({
  type: DELETE_CLIENT,
  payload: client,
});

export const deleteClientSuccess = client => ({
  type: DELETE_CLIENT_SUCCESS,
  payload: client,
});

export const deleteClientFail = error => ({
  type: DELETE_CLIENT_FAIL,
  payload: error,
});
