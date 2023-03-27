import * as Api from '../api';
import { USERINFO } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import useToast from './useToast';

export default async () => {
  const userinfo = useSelector((state) => state.userinfo);
  const dispatch = useDispatch();

  if (!userinfo?.email) {
    const { code, info, msg } = await Api.get_user_info().catch((e) => e);
    if (code === 0) {
      dispatch({ type: USERINFO, info });
    }
  }
};
