import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:3000'
});
// Adiciona um interceptador na requisição
http.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = localStorage.getItem('access_token');
    if (token) {
        // das três formas abaixo, qualquer uma funciona, mas a primeira é a mais usada
        config.headers = { Authorization: `Bearer ${token}` };
        // config.headers['Authorization'] = `Bearer ${token}`;
        // config.headers = { 'Authorization': `Bearer ${token}` };
    }
    return config;
}, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
});
