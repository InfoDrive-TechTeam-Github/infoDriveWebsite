import { apiUrl } from '../config';
import { fetchWrapper } from '../helpers';

export const jobService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/jobs`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    console.log('params', params);
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    console.log('id',id);
    console.log('params', params);
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
