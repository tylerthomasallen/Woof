import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import MoreDogInfo from '../dog/more_dog_info';

class ReviewsIndex extends React.Component {


  render() {
    let { currentDog, currentReviews, retrieveUser, users, session, destroyReview } = this.props;

    if (currentDog === undefined) {
      currentDog = {};
    }

      return (

      <div className="reviews-container">
        <div className="reviews-title">
          <span>Recommended Reviews </span>
          <span>for a {`${currentDog.name}`}</span>
        </div>

        <div className="review-body">

          <div className="reviews-middle-container">
            {currentReviews.map(review => (
              <ReviewIndexItem key={review.id} currentReview={review}
                retrieveUser={retrieveUser} users={users} session={session}
              dog={currentDog} destroyReview={destroyReview}/>
            ))}
          </div>

          <div className="reviews-right-container">
            <MoreDogInfo dog={currentDog}/>
          </div>

        </div>

      </div>
    );
  }
}

export default ReviewsIndex;
