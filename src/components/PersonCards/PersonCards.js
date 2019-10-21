import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestChosenPerson } from '../../redux/actions/people';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    requestChosenPerson,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
