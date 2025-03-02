import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || ''
    }),
    actions: {
        async login(credentials) {
            const { data } = await axios.post('/api/login', credentials);
            this.token = data.token;
            localStorage.setItem('token', data.token);
        },
        async fetchUser() {
            const { data } = await axios.get('/api/user', {
                headers: { Authorization: `Bearer ${this.token}` }
            });
            this.user = data;
        }
    }
});
