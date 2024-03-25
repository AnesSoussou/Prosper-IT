import {
  GET_PARTENAIRES_SUCCESS,
  GET_PARTENAIRES_FAIL,
  ADD_PARTENAIRE_SUCCESS,
  ADD_PARTENAIRE_FAIL,
  UPDATE_PARTENAIRE_SUCCESS,
  UPDATE_PARTENAIRE_FAIL,
  DELETE_PARTENAIRE_SUCCESS,
  DELETE_PARTENAIRE_FAIL,
  GET_PARTENAIRE_PROFILE_SUCCESS,
  GET_PARTENAIRE_PROFILE_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  partenaires: [],
  partenaireProfile: {},
  error: {},
  loading: true
}

const contacts = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PARTENAIRES_SUCCESS:
      return {
        ...state,
        partenaires: action.payload,
        loading: true
      }

    case GET_PARTENAIRES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case ADD_PARTENAIRE_SUCCESS:

      return {
        ...state,
        partenaires: [action.payload, ...state.partenaires],
      }

    case ADD_PARTENAIRE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_PARTENAIRE_PROFILE_SUCCESS:
      return {
        ...state,
        partenaireProfile: action.payload,
      }

    case UPDATE_PARTENAIRE_SUCCESS:
      return {
        ...state,
        partenaires: state.partenaires.map(partenaire =>
          partenaire.id.toString() === action.payload.id.toString()
            ? { partenaire, ...action.payload }
            : partenaire
        ),
      }

    case UPDATE_PARTENAIRE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_PARTENAIRE_SUCCESS:
      return {
        ...state,
        partenaires: state.partenaires.filter(
          partenaire => partenaire.id.toString() !== action.payload.toString()
        ),
      }

    case DELETE_PARTENAIRE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_PARTENAIRE_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default contacts
