/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import {
  CREATE_ORDER,
  CREATE_PLAYERS,
  ENDPOINT,
} from '../constants/url_config';
import { getQueryParams } from './query';

export const createOrder = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void,
  data: any
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
    const response = await axios.post(ENDPOINT + CREATE_ORDER, {
      branchId: branchId,
      eventId: eventId,
      ...data,
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};

export const addPlayers = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void,
  data: any
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
    const response = await axios.post(ENDPOINT + CREATE_PLAYERS, {
      branchId: branchId,
      eventId: eventId,
      ...data,
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};

export const generateRacepass = async (
  onAccept: (response: AxiosResponse) => void,
  onReject: (e: any) => void,
  data: any
) => {
  const { branchId, eventId } = getQueryParams(onReject);
  try {
    const response = await axios.post(ENDPOINT + CREATE_ORDER, {
      branchId: branchId,
      eventId: eventId,
      ...data,
    });
    onAccept(response);
  } catch (e) {
    onReject(e);
  }
};
