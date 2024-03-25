import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_PARTENAIRES, GET_PARTENAIRE_PROFILE, ADD_NEW_PARTENAIRE, DELETE_PARTENAIRE, UPDATE_PARTENAIRE } from "./actionTypes"

import {
  getPartenairesSuccess,
  getPartenairesFail,
  getPartenaireProfileSuccess,
  getPartenaireProfileFail,
  addPartenaireFail,
  addPartenaireSuccess,
  updatePartenaireSuccess,
  updatePartenaireFail,
  deletePartenaireSuccess,
  deletePartenaireFail,
} from "./actions"

//Include Both Helper File with needed methods
import { getPartenaires, getPartenaireProfile, addNewPartenaire, updatePartenaire, deletePartenaire } from "../../helpers/fakebackend_helper"

// toast
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function* fetchPartenaires() {
  try {
    const response = yield call(getPartenaires)
    yield put(getPartenairesSuccess(response))
  } catch (error) {
    yield put(getPartenairesFail(error))
  }
}

function* fetchPartenaireProfile() {
  try {
    const response = yield call(getPartenaireProfile)
    yield put(getPartenaireProfileSuccess(response))
  } catch (error) {
    yield put(getPartenaireProfileFail(error))
  }
}

function* onUpdatePartenaire({ payload: partenaire }) {
  try {
    const response = yield call(updatePartenaire, partenaire)
    yield put(updatePartenaireSuccess(response))
    toast.success("Contact Updated Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(updatePartenaireFail(error))
    toast.error("Contact Updated Failed", { autoClose: 2000 });
  }
}

function* onDeletePartenaire({ payload: partenaire }) {
  try {
    const response = yield call(deletePartenaire, partenaire)
    yield put(deletePartenaireSuccess(response))
    toast.success("Contact Deleted Successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(deletePartenaireFail(error))
    toast.error("Contact Deleted Failed", { autoClose: 2000 });
  }
}

// function* onAddNewPartenaire({ payload: partenaire }) {

//   try {
//     const response = yield call(addNewPartenaire, partenaire)
//     yield put(addPartenaireSuccess(response))
//     toast.success("Contact Added Successfully", { autoClose: 2000 });
//   } catch (error) {
//     yield put(addPartenaireFail(error))
//     toast.error("Contact Added Failed", { autoClose: 2000 });
//   }
// }

function* onAddNewPartenaire({ payload: partenaire }) {
  try {
    // Simuler l'ajout d'un partenaire sans appel API
    // Supposons que le `partenaire` est l'objet à ajouter
    // Vous pouvez ajouter un ID ou d'autres transformations nécessaires ici
    const simulatedResponse = { ...partenaire, id: Date.now() }; // Ajouter un ID simulé

    yield put(addPartenaireSuccess(simulatedResponse));
    toast.success("Partenaire added successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(addPartenaireFail(error));
    toast.error("Adding partenaire failed", { autoClose: 2000 });
  }
}

function* contactsSaga() {
  yield takeEvery(GET_PARTENAIRES, fetchPartenaires)
  yield takeEvery(GET_PARTENAIRE_PROFILE, fetchPartenaireProfile)
  yield takeEvery(ADD_NEW_PARTENAIRE, onAddNewPartenaire)
  yield takeEvery(UPDATE_PARTENAIRE, onUpdatePartenaire)
  yield takeEvery(DELETE_PARTENAIRE, onDeletePartenaire)
}

export default contactsSaga;
