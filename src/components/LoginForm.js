import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, InputField, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUserThunk } from '../store/AuthReducer';

export class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUserThunk({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderSpinner() {
        if (this.props.loading) return <Spinner size='large' />
        else {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
                </Button>
            )
        }
    }

    render () {
        return (
            <Card style={{backgroundColor: 'red'}}>
                <CardSection>
                    <InputField 
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <InputField 
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    }
} 

const LoginFormContainer = connect(mapStateToProps, { emailChanged, passwordChanged, loginUserThunk })(LoginForm);
export default LoginFormContainer;