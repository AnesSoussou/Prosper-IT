import {
  GET_PARTENAIRE_PROFILE,
  GET_PARTENAIRE_PROFILE_FAIL,
  GET_PARTENAIRE_PROFILE_SUCCESS,
  GET_PARTENAIRES,
  GET_PARTENAIRES_FAIL,
  GET_PARTENAIRES_SUCCESS,
  ADD_NEW_PARTENAIRE,
  ADD_PARTENAIRE_SUCCESS,
  ADD_PARTENAIRE_FAIL,
  UPDATE_PARTENAIRE,
  UPDATE_PARTENAIRE_SUCCESS,
  UPDATE_PARTENAIRE_FAIL,
  DELETE_PARTENAIRE,
  DELETE_PARTENAIRE_SUCCESS,
  DELETE_PARTENAIRE_FAIL,
} from "./actionTypes"

export const getPartenaires = () => ({
  type: GET_PARTENAIRES,
})

export const getPartenairesSuccess = partenaires => ({
  type: GET_PARTENAIRES_SUCCESS,
  payload: partenaires,
})

export const addNewPartenaire = partenaire => ({
  type: ADD_NEW_PARTENAIRE,
  payload: partenaire,
})

export const addPartenaireSuccess = partenaire => ({
  type: ADD_PARTENAIRE_SUCCESS,
  payload: partenaire,
})

export const addPartenaireFail = error => ({
  type: ADD_PARTENAIRE_FAIL,
  payload: error,
})

export const getPartenairesFail = error => ({
  type: GET_PARTENAIRES_FAIL,
  payload: error,
})

export const getPartenaireProfile = () => ({
  type: GET_PARTENAIRE_PROFILE,
})

export const getPartenaireProfileSuccess = partenaireProfile => ({
  type: GET_PARTENAIRE_PROFILE_SUCCESS,
  payload: partenaireProfile,
})

export const getPartenaireProfileFail = error => ({
  type: GET_PARTENAIRE_PROFILE_FAIL,
  payload: error,
})

export const updatePartenaire = partenaire => ({
  type: UPDATE_PARTENAIRE,
  payload: partenaire,
})

export const updatePartenaireSuccess = partenaire => ({
  type: UPDATE_PARTENAIRE_SUCCESS,
  payload: partenaire,
})

export const updatePartenaireFail = error => ({
  type: UPDATE_PARTENAIRE_FAIL,
  payload: error,
})

export const deletePartenaire = partenaire => ({
  type: DELETE_PARTENAIRE,
  payload: partenaire,
})

export const deletePartenaireSuccess = partenaire => ({
  type: DELETE_PARTENAIRE_SUCCESS,
  payload: partenaire,
})

export const deletePartenaireFail = error => ({
  type: DELETE_PARTENAIRE_FAIL,
  payload: error,
})
