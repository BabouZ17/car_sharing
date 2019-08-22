import axios from 'axios';

export default class api {

    static async getItems() {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.get('/api/car_sharing/carmakers', config);
            return response.data;
        } catch (error) {
            return [];
        }    
    }

    static async postItem(payload) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.post('/api/car_sharing/carmaker/new', payload, config);
            return response;
        } catch (error) {
            return error;
        }
    }

    static async deleteItem(carmaker_id) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.delete('/api/car_sharing/carmaker/' + carmaker_id + '/delete', config);
            return response;
        } catch (error) {
            return error;
        }
    }
}