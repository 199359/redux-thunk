import React from 'react'
import { connect } from 'react-redux'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction
}
    from '../state/auth'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'
import firebase from 'firebase'

const signOut = () => {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}

const Auth = props => (
    props._user ?
        <div>
            <button
            onClick={signOut}
            >
            LOG OUT
            </button>
            {props.children}
        </div>

        :
        <div>
            <LoginByEmailAndPassword
                _emailValue={props._emailValue}
                _onEmailChange={props._onEmailChange}
                _passwordValue={props._passwordValue}
                _onPasswordChange={props._onPasswordChange}
                _onLogInClick={props._onLogInClick}
            />
        </div>
)

const mapStateToProps = state => ({
    _user: state.auth.user,
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password
})

const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClick: () => dispatch(onLoginClickAction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)