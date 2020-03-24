import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Title, withTheme} from 'react-native-paper';
import {DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <View style={styles.mainContainerStyle}>
      <Avatar.Text size={100} label="SP" />
      <Title>ASAD NAEEM</Title>
      <DrawerItemList
        {...props}
        activeBackgroundColor="white"
        activeTintColor="#E36B0B"
        itemStyle={styles.drawerItemStyle}
        labelStyle={styles.drawerLabelStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    alignItems: 'center',
  },
  drawerLabelStyle: {
    fontFamily: 'Montserrat-Regular',
  },
  drawerItemStyle: {
    borderRadius: 0,
    alignSelf: 'stretch',
    marginVertical: 0,
  },
});

export default CustomDrawer;
