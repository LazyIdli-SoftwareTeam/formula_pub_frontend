/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINT, GET_COMBOS } from '../constants/url_config';
import axios, { AxiosResponse } from 'axios';

export const getCombos = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void,
  data: { branchId: string; eventId: string }
) => {
  try {
    const response = await axios.post(ENDPOINT + GET_COMBOS, {
      ...data,
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};



     
