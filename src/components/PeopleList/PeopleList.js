import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestPeopleByGender } from '../../redux/actions/people';
import { getPeopleByGender } from '../../redux/selectors/people';
import { openModal } from '../../redux/actions/session';

const mapStateToProps = (state) => ({
  people: getPeopleByGender(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    requestPeopleByGender,
    openModal,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
