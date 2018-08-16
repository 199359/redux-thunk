import React from 'react'
import { connect } from 'react-redux'
import {onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction} 
    from '../state/auth'
const Auth = props => (
    <div>
        {
            <div>
                <div>
                    <input type='email' onChange={props._onEmailChange}></input>
                </div>
                <div>
                    <input type='password' onChange={props._onPasswordChange}></input>
                </div>
                <div>
                    <button onClick={props._onLogInClick}>
                        LOGIN
                    </button>
                </div>
            </div>
        }
    </div>
)

const mapStateToProps = state => ({

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