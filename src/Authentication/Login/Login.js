import React from 'react';
import {Button, Container, Text} from '../../Components';
import {Box} from '../../Components/Theme';
import {SocialLogin, TextInput} from '../Components';

const Login = () => {
  const emailValidator = email => {
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  };

  const Footer = () => {
    return (
      <>
        <SocialLogin />
        <Box alignItems="center">
          <Button variant="transparent">
            <Box flexDirection="row">
              <Text variant="button" color="white">
                Don't have an account?
              </Text>
              <Text
                variant="button"
                marginLeft="s"
                color="primary"
                onPress={() => alert('Sign up!!!')}>
                Sign Up here
              </Text>
            </Box>
          </Button>
        </Box>
      </>
    );
  };

  const Children = () => {
    return (
      <>
        <Box padding="xl">
          <Text variant="titleBig" textAlign="center" marginBottom="s">
            Welcome back
          </Text>
          <Text variant="body" textAlign="center">
            Use your credentials below and login to your account
          </Text>
          <TextInput
            placeholder="Enter your Email"
            icon="mail"
            validator={emailValidator}
          />
        </Box>
      </>
    );
  };

  return (
    <>
      <Container footer={<Footer />} children={<Children />}></Container>
    </>
  );
};

export default Login;
