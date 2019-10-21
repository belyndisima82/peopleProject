import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map as ImmutableMap } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PersonCards from '../PersonCards';
import PersonViewer from '../PersonViewer';

import { Select, Col, Row } from 'antd';

import './style.css';

const { Option } = Select;


class PeopleList extends Component {
  static propTypes = {
    requestPeopleByGender: PropTypes.func.isRequired,
    people: ImmutablePropTypes.map,
  };

  static defaultProps = {
    people: ImmutableMap(),
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChangeValue = (value) => {
    this.setState({
      gender: value,
    })
    this.props.requestPeopleByGender(value);
  };

  getModalOpen = () => {
    this.setState({
      isVisible: true,
    });
    this.props.openModal('personModal');
  }

  render() {
    console.log(this.props.people)
    return (
      <div className={this.props.people.size ? "container" : "container noList"} align="middle">
        <Row>
          <Col span={18} offset={3}>
            <Row gutter={16}>
              <h1>LOOKING FOR A PERFECT MATCH ?</h1>
              <p>Who’s your perfect match?, just select a gender and find out!.</p>
              <Col xs={24} sm={24} className="select-col">
                <h3>Select an specific gender</h3>
                <Select
                  style={{ width: 200 }}
                  value={this.state.gender}
                  onChange={(value) => this.onChangeValue(value)} placeholder="Gender"
                >
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                </Select>
              </Col>
            </Row>
          </Col>
          <Col span={18} offset={3}>
            {this.props.people.map((person) => (
            <PersonCards
              key={person.get('login').get('uuid')}
              uuid={person.get('login').get('uuid')}
              image={person.get('picture').get('large')}
              name={person.get('name').get('first')}
              lastName={person.get('name').get('last')}
              email={person.get('email')}
              getModalOpen={() => this.getModalOpen()}
            />
            )).toList().toJS()}
          </Col>
        </Row>
        {this.state.isVisible ?
          <PersonViewer
          />
          : null}
      </div>
    );
  }
}


export default PeopleList;
