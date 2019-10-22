import axios from 'axios';

export default class api {

    static async getItem(id) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = await axios.get(`/api/car_sharing/carmaker/${id}`, config);
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
            const response = await axios.get('/api/car_sharing/carmakers', config);
            return response.data;
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
            const response = axios.put(`/api/car_sharing/carmaker/${payload.id}/update`, payload, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    static async postItem(payload) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        try {
            const response = await axios.post('/api/car_sharing/carmaker/new', payload, config);
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
            const response = await axios.delete(`/api/car_sharing/carmaker/${id}/delete`, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}