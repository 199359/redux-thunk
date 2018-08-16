import React from 'react'
import { connect } from 'react-redux'

const Users = props => (
    <div>
        {
            props._isUsersAreLoading === true ?
                <p>Ładowanie</p>
                :
                props._users.results.map((el) => (
                    <div>
                        <div>
                            <img src={el.picture.thumbnail}></img>
                        </div>
                        {el.name.first} {el.name.last}
                    </div>
                ))
        }
    </div>
)

const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers.isUsersAreLoading
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)