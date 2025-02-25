/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT, GET_SCORES, GET_TOP_PLAYERS } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const getScores = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void, 
  data:  any
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
    const response = await axios.post(ENDPOINT + GET_SCORES, {
      branchId: branchId,
      eventId: eventId,
      ...data
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};
export const getTopPlayers = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void, 
) => {
  try {
    const response = await axios.get(ENDPOINT + GET_TOP_PLAYERS);
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};