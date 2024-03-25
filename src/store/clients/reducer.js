import { client } from "common/data";
import {
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAIL,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAIL,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL,
} from "./actionTypes";

const INIT_STATE = {
  clients: client,
  error: {},
  loading: true,
};

const clients = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };

    case GET_CLIENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ADD_CLIENT_SUCCESS:
      console.log('Adding client:', action.payload);
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };

    case ADD_CLIENT_FAIL:
      console.error('Failed to add client:', action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        clients: state.clients.map(client =>
          client.id.toString() === action.payload.id.toString()
            ? { ...client, ...action.payload }
            : client
        ),
      };

    case UPDATE_CLIENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        clients: state.clients.filter(
          client => client.id.toString() !== action.payload.toString()
        ),
      };

    case DELETE_CLIENT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default clients;
