import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeModal, openModal } from '../../redux/actions/session';
import { selectVisible } from '../../redux/selectors/session';
import { selectSpecificPerson } from '../../redux/selectors/people';


const mapStateToProps = (state) => ({
  choosePersonVisible: selectVisible(state, 'personModal'),
  person: selectSpecificPerson(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    closeModal,
    openModal,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
