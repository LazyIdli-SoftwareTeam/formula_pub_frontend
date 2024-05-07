/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT, GET_COMBOS, GET_COUPON } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';
import { getQueryParams } from './query';

export const getCombos = async (
    onAccept: (response: AxiosResponse) => void,
    onReject: (e: any) => void
) => {
    const { branchId, eventId } = getQueryParams(onReject);
    try {
        const response = await axios.post(ENDPOINT + GET_COMBOS, {
            branchId: branchId,
            eventId: eventId,
        });
        onAccept(response);
    } catch (e) {
        onReject(e);
    }
};



export const getCoupons = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
      const response = await axios.post(ENDPOINT + GET_COUPON, {
          branchId: branchId,
          eventId: eventId,
      });
      onAccept(response);
  } catch (e) {
      onReject(e);
  }
};

