/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT, GET_QUEUE } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const getQueue = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
    const response = await axios.post(ENDPOINT + GET_QUEUE, {
      branchId: branchId,
      eventId: eventId,
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};
