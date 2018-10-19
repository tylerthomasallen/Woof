import { RECEIVE_DOG } from '../../../actions/dog_actions';
import { RECEIVE_REVIEWS } from '../../../actions/reviews_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DOG:
    debugger;
      const { reviews } = action.payload;
      const newState = {};
      reviews.forEach(review => newState[review.id] = review);
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
