/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { CHANGE_RIDE, ENDPOINT, GET_RIDE } from '../constants/url_config';
import { getQueryParams } from './query';

export const getRide = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (error: any) => void,
  data: any 
) => {
  try {
    const { branchId, eventId } = getQueryParams(() => {});

    const response = await axios.post(ENDPOINT + GET_RIDE, {
      branchId: branchId,
      eventId: eventId,
      ...data
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};
export const changeRideInfo = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (error: any) => void,
  data: any 
) => {
  try {
    const { branchId, eventId } = getQueryParams(() => {});

    const response = await axios.post(ENDPOINT + CHANGE_RIDE, {
      branchId: branchId,
      eventId: eventId,
      ...data
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};
