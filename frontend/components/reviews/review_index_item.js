import React from 'react';
import Stars from '../stars/stars';
import * as MapApi from '../../util/api/map_util';

class ReviewIndexItem extends React.Component {

  todaysDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = `${today.getFullYear()}`;

    if (day < 10) {
      day = `0${day}`;
    } else {
      day = `${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }

    return `${month}/${day}/${year}`;
  }

  componentDidMount() {
    const { retrieveUser, currentReview, users} = this.props;
    const userId = currentReview.user_id;

    if (!users[userId]) {
      retrieveUser(currentReview.user_id);
    }
  }

  formattedName(currentUser) {

    if (currentUser.first_name) {
      return `${currentUser.first_name} ${currentUser.last_name[0]}.`;
    } else {
      return 'Tyler A.';
    }

  }

  formattedLocation(currentUser) {
    return `${currentUser.city}, ${currentUser.state}`;
  }

  randomReviewCount() {
    return Math.floor(Math.random() * 100);
  }

  render() {

    const { currentReview, users } = this.props;
    const currentUser = users[currentReview.user_id] || {};

    return (
      <div className="review-item-container">

        <div className="review-item-user">

          <div className="user-photo">
            <i className="fas fa-user-astronaut"></i>
          </div>

          <div className="user-info">

            <span className="user-info-name">{this.formattedName(currentUser)}</span>
            <span className="user-info-loc">{this.formattedLocation(currentUser)}</span>

            <div className="user-info-reviews">
              <i className="fas fa-star user-info-star"></i>
              <span className="user-info-review-count">{this.randomReviewCount()}</span>
              <span>reviews</span>
            </div>

          </div>

        </div>

        <div className="review-item-review">
          <div className="review-rating">
            <Stars rating={currentReview.rating} cssClass="review-stars"/>
            <span>{this.todaysDate()}</span>
          </div>

          <div className="review-item-body">
            <p>{currentReview.body}</p>
          </div>

        </div>

      </div>
    );
  }
}

export default ReviewIndexItem;
