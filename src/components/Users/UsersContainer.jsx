import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import { requestUsers, follow, unfollow } from '../../redux/users-reducer';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getFollowingInProgress } from '../../redux/user-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChange = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {requestUsers, follow, unfollow})(UsersContainer);