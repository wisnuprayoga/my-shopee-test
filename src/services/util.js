import axios from 'axios';
import {ApiUrl} from './constants';

export const requestAPI = axios.create({
  baseURL: ApiUrl
});
