import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth} />
        )
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getAuthUserData } )(HeaderContainer);