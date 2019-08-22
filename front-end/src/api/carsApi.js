import axios from 'axios';

export default class api {

    static async getItems() {
            let config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            try {
                const response = await axios.get('/api/car_sharing/cars', config);
                return response.data;
            } catch (error) {
                return [];
            }     
    }

    static postItem(payload) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const response = axios.post('/api/car_sharing/car/new', payload, config);
            return response.data;
        } catch (error) {
            return error;
        }
    }

    static async deleteItem(car_id) {
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.delete('/api/car_sharing/car/' + car_id + '/delete', config);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}