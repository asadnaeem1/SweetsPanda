import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Appbar, Title, Avatar, Text, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {BakeryCard} from '../components';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainViewContainer}>
      <Appbar.Header style={styles.headerStyle} statusBarHeight={10}>
        <IconButton
          icon={props => <Icon name="menuunfold" {...props} />}
          onPress={_ => navigation.openDrawer()}
        />
        <Avatar.Image
          size={32}
          source={{
            uri:
              'https://unsplash.com/photos/GfX8eYiZsdQ/download?force=true&w=640',
          }}
        />
      </Appbar.Header>
      <ScrollView
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.titleStyle}>Sweets Panda</Text>
        <Title>Popular</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BakeryCard sm />
          <BakeryCard />
          <BakeryCard />
        </ScrollView>
        <Title>Explore</Title>
        <BakeryCard />
        <BakeryCard />
        <BakeryCard />
        <BakeryCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  containerStyle: {
    marginHorizontal: 16,
  },
  titleStyle: {
    fontFamily: 'Caveat-Regular',
    color: '#E36B0B',
    fontSize: 50,
  },
});

export default HomeScreen;
