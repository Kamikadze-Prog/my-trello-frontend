import axios from 'axios';
import api from '../../../common/constants/api';
import { asyncDispatch } from '../../store';
import Board from '../../../pages/Board/Board';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getBoards = async (id: number): Board => {
  try {
    const { data: boards } = await axios.get(api.baseURL, { params: id });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await asyncDispatch('SUCCESS_ACTION_TYPE', boards);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    asyncDispatch('ERROR_ACTION_TYPE');
  }
};
