import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, toggleIsFetching } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching} />
        )
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(withUrlDataContainerComponent);