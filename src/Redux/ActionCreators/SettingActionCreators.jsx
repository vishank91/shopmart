import { CREATE_SETTINg, DELETE_SETTINg, GET_SETTINg, UPDATE_SETTINg } from "../Constants"

export function createSetting(data) {
    return {
        type: CREATE_SETTINg,
        payload: data
    }
}

export function getSetting() {
    return {
        type: GET_SETTINg
    }
}

export function updateSetting(data) {
    return {
        type: UPDATE_SETTINg,
        payload: data
    }
}

export function deleteSetting(data) {
    return {
        type: DELETE_SETTINg,
        payload: data
    }
}