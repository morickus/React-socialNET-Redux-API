import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, toggleIsFetching } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        profileAPI.profile(userId).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(data);
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