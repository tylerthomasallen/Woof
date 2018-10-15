import { RECEIVE_CURRENT_USER } from '../../../actions/session_actions';
import { RECEIVE_USER } from '../../../actions/reviews_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  debugger;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    default:
      return state;
  }
};

export default usersReducer;
