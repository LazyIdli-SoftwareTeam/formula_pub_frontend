/* eslint-disable @typescript-eslint/no-explicit-any */
import { EDIT_PLAYER, ENDPOINT,  REGISTER_HOST } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const registerHost = async (
    onAccept: (response: AxiosResponse) => void,
    onReject: (e: any) => void, 
    data: any
) => {
    const { branchId, eventId } = getQueryParams(onReject);
    try {
        const response = await axios.post(ENDPOINT + REGISTER_HOST, {
            branchId: branchId,
            eventId: eventId,
            ...data
        });
        onAccept(response);
    } catch (e) {
        onReject(e);
    }
};


export const editPlayer = async (
    onAccept: (response: AxiosResponse) => void,
    onReject: (e: any) => void, 
    data: any
) => {
    const { branchId, eventId } = getQueryParams(onReject);
    try {
        const response = await axios.post(ENDPOINT + EDIT_PLAYER, {
            branchId: branchId,
            eventId: eventId,
            ...data
        });
        onAccept(response);
    } catch (e) {
        onReject(e);
    }
};