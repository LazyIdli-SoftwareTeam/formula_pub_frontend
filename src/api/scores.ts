/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT, GET_SCORES } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const getScores = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void, 
  data:  {
    mapType: string; 
  }
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
