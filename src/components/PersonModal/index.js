import React from 'react';
import { Modal, Card } from 'antd';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const { Meta } = Card;

const PersonModal = ({
  visible,
  onClose,
  person,

}) => (
    <Modal
      visible={visible}
      footer={null}
      onCancel={onClose}
    >
      <Card
        style={{ width: '100%' }}
        cover={<img alt="example" src={person.get('image')} />}
      >
        <Meta title={`Hey! Im ${person.get('name')} and Im your match `} description={`mail:  ${person.get('email')}`} />
      </Card>
    </Modal>
  );


PersonModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  person: ImmutablePropTypes.map,
};

PersonModal.defaultProps = {
  visible: false,
  person: ImmutableMap(), 
};

export default PersonModal;

