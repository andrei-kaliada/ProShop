import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../store/actions';

export const useActionsCreator = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
