import { connect } from 'react-redux';
import { retrieveDog } from '../../actions/dog_actions';
import ReviewForm from './review_form';
import { fetchCreateReview } from '../../util/api/review_util';

const mapStateToProps = ( { entities, session }, ownProps ) => {
  const dogId = parseInt(ownProps.match.params.dogId);
  const userId = session.id;
  const { dogs } = entities;

  return {
    dogId,
    userId,
    dogs,
    formType: "Post"
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveDog: (dogId) => dispatch(retrieveDog(dogId)),
  processForm: (review) => fetchCreateReview(review)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
