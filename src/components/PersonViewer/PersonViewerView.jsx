import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PersonModal from '../PersonModal';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';


const MainViewer = (props) => (
  <Fragment>
    <PersonModal
      visible={props.choosePersonVisible}
      onClose={() => props.closeModal('personModal')}
      person={props.person}
    />
  </Fragment>
);

MainViewer.propTypes = {
  choosePersonVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  person: ImmutablePropTypes.map,
};

MainViewer.defaultProps = {
  person: ImmutableMap(),
};


export default MainViewer;
