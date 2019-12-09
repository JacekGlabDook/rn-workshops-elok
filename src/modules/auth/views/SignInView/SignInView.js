import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { authActions } from '../../redux/actions';

class SignInView extends PureComponent {
  state = {
    login: '',
    password: '',
  }

  onSubmit = () => {
    const { dispatch } = this.props;
    const { login, password } = this.state;

    dispatch(authActions.signUp({ login, password }, mavigation));
  }

  render() {
    return <View />
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignInView);
