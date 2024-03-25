import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CLIENTS,
  ADD_NEW_CLIENT,
  DELETE_CLIENT,
  UPDATE_CLIENT,
} from "./actionTypes";
import {
  getClientsSuccess,
  getClientsFail,
  addClientSuccess,
  addClientFail,
  updateClientSuccess,
  updateClientFail,
  deleteClientSuccess,
  deleteClientFail,
} from "./actions";

import { getClientsApi, addNewClientApi, updateClientApi, deleteClientApi } from "../../helpers/fakebackend_helper";

import { toast } from "react-toastify";

function* fetchClients() {
try {
const response = yield call(getClientsApi);
yield put(getClientsSuccess(response));
} catch (error) {
yield put(getClientsFail(error));
toast.error("Fetching clients failed", { autoClose: 2000 });
}
}

// function* onAddNewClient({ payload: client }) {
// try {
// const response = yield call(addNewClientApi, client);
// yield put(addClientSuccess(response));
// toast.success("Client added successfully", { autoClose: 2000 });
// } catch (error) {
// yield put(addClientFail(error));
// toast.error("Adding client failed", { autoClose: 2000 });
// }
// }

function* onAddNewClient({ payload: client }) {
  try {
    // Simuler l'ajout d'un client sans appel API
    // Supposons que le `client` est l'objet à ajouter
    // Vous pouvez ajouter un ID ou d'autres transformations nécessaires ici
    const simulatedResponse = { ...client, id: Date.now() }; // Ajouter un ID simulé

    yield put(addClientSuccess(simulatedResponse));
    toast.success("Client added successfully", { autoClose: 2000 });
  } catch (error) {
    yield put(addClientFail(error));
    toast.error("Adding client failed", { autoClose: 2000 });
  }
}


function* onUpdateClient({ payload: client }) {
try {
const response = yield call(updateClientApi, client);
yield put(updateClientSuccess(response));
toast.success("Client updated successfully", { autoClose: 2000 });
} catch (error) {
yield put(updateClientFail(error));
toast.error("Updating client failed", { autoClose: 2000 });
}
}

function* onDeleteClient({ payload: client }) {
try {
const response = yield call(deleteClientApi, client);
yield put(deleteClientSuccess(response));
toast.success("Client deleted successfully", { autoClose: 2000 });
} catch (error) {
yield put(deleteClientFail(error));
toast.error("Deleting client failed", { autoClose: 2000 });
}
}

function* clientsSaga() {
yield takeEvery(GET_CLIENTS, fetchClients);
yield takeEvery(ADD_NEW_CLIENT, onAddNewClient);
yield takeEvery(UPDATE_CLIENT, onUpdateClient);
yield takeEvery(DELETE_CLIENT, onDeleteClient);
}

export default clientsSaga;
 
