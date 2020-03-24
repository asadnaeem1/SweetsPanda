import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {Caption, Button, Title, Appbar, IconButton} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const SigninScreen = ({navigation: {navigate, openDrawer}}) => {
  return (
    <LinearGradient
      colors={['#ff7200', '#E36B0B', '#f7f7f7']}
      style={styles.gradientContainerStyle}>
      <Appbar.Header statusBarHeight={10} style={styles.headerStyle}>
        <IconButton
          color="white"
          icon={props => <Icon name="menuunfold" {...props} />}
          onPress={_ => openDrawer()}
        />
      </Appbar.Header>
      <View style={styles.mainContainerStyle}>
        <View style={styles.logoContainerStyle}>
          <Text style={styles.titleStyle}>SweetsPanda</Text>
          <Title style={styles.colorWhite}>SIGNIN</Title>
        </View>
        <View>
          <TextInput
            placeholder="Email"
            mode="outlined"
            keyboardType="email-address"
            style={styles.inputStyle}
            autoCompleteType="email"
          />
          <TextInput
            placeholder="Password"
            mode="outlined"
            secureTextEntry
            style={styles.inputStyle}
            autoCompleteType="password"
          />
          <Button mode="contained" color="white">
            SIGNIN
          </Button>
          <Caption
            style={styles.secondaryLinkStyle}
            onPress={_ => navigate('Signup')}>
            Don't have an account, Signup!
          </Caption>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainerStyle: {
    flex: 1,
  },
  mainContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerStyle: {
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    width: '100%',
  },
  titleStyle: {
    fontFamily: 'Caveat-Regular',
    color: 'white',
    fontSize: 50,
  },
  logoContainerStyle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputStyle: {
    paddingHorizontal: 14,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    backgroundColor: 'white',
    borderRadius: 2,
    elevation: 2,
  },
  secondaryLinkStyle: {
    alignSelf: 'center',
    marginTop: 10,
  },
  colorWhite: {
    color: 'white',
  },
});

export default SigninScreen;
