import axios from 'axios';

export default class api {

    static async getItem(id) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = await axios.get(`/api/car_sharing/car/${id}`, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    static async getItems() {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = await axios.get('/api/car_sharing/cars', config);
            return response;
        } catch (error) {
            return error;
        }
    }

    static updateItem(payload) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = axios.put(`/api/car_sharing/car/${payload.id}/update`, payload, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    static postItem(payload) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = axios.post('/api/car_sharing/car/new', payload, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    static async deleteItem(id) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = await axios.delete(`/api/car_sharing/car/${id}/delete`, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}