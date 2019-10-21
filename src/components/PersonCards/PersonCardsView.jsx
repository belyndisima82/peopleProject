import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Col, Card , Avatar } from 'antd';

const { Meta } = Card;

class PeopleCards extends Component {

  static propTypes = {
    uuid: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    requestChosenPerson: PropTypes.func.isRequired,
    getModalOpen: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleOnClick = () => {
    this.setState({
      isVisible: true,
    });
    const person = {
      key: this.props.uuid,
      name: this.props.name,
      image: this.props.image,
      email:this.props.email,
    }
    this.props.requestChosenPerson(person);
    this.props.getModalOpen();
  }


  render() {
    return (
      <Col xs={24} sm={6} align="middle">
        <Card
          align="middle"
          hoverable
          style={{ width: 150, marginTop: 30, paddingTop: 10 }}
          cover={<Avatar size={64} src={this.props.image}></Avatar>}
          onClick={() => { this.handleOnClick() }}
        >
          <Meta title={this.props.name} description={this.props.lastName} />
        </Card>
      </Col>

    );
  }
}



export default PeopleCards;
