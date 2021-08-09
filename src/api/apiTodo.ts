// Core
import axios from 'axios';

import { TODO_API_URL } from './url';
import { ITodoModel } from '../types';

export const apiTodo = Object.freeze({
    getVersion() {
        return '0.0.1';
    },

    async tags() { // get tags
        const { data } = await axios.get(
            `${TODO_API_URL}/tags`,
        );

        return data;
    },

    async getTodos() {
        const { data } = await axios.get(
            `${TODO_API_URL}/tasks`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                },
            },
        );

        return data.data;
    },
    async updateTodo(credentials: ITodoModel, id: string) {
        const { ...body } = credentials;

        const { data } = await axios.put(
            `${TODO_API_URL}/tasks/${id}`,
            body,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                },
            },
        );

        return data;
    },
    async deleteTodo(id: string) {
        const { data } = await axios.delete(
            `${TODO_API_URL}/tasks/${id}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                },
            },
        );

        return data;
    },
    async addTodo(credentials: ITodoModel) {
        const { ...body } = credentials;
        const { data } = await axios.post(
            `${TODO_API_URL}/tasks`,
            body,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('jwt')}`,
                },
            },
        );

        return data;
    },
});
