/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT,  GET_TOURNAMENT_SCORES } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const getTournamentScores = async (
    onAccept: (response: AxiosResponse) => void,
    onReject: (e: any) => void
) => {
    const { branchId, eventId } = getQueryParams(onReject);
    try {
        const response = await axios.post(ENDPOINT + GET_TOURNAMENT_SCORES, {
            branchId: branchId,
            eventId: eventId,
        });
        onAccept(response);
    } catch (e) {
        onReject(e);
    }
};
