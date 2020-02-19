import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import { headerAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.header().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, { setAuthUserData } )(HeaderContainer);