import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Subheading, Caption, withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const BakeryCard = ({theme, sm}) => {
  const windowWidth = Dimensions.get('window').width;
  const {push} = useNavigation();

  return (
    <View
      style={{
        ...styles.cardWrapViewStyle,
        ...(sm ? {width: windowWidth * 0.7} : {}),
      }}>
      <Card style={styles.cardStyle} onPress={_ => push('Bakery')}>
        <Card.Cover
          source={{
            uri: 'https://source.unsplash.com/random/600x600/?cakes,bakery',
          }}
        />
        <Card.Content style={styles.cardContentStyle}>
          <View>
            <Subheading>Ambala Bakery</Subheading>
            <Caption>Chips & Cakes</Caption>
          </View>
          <View style={styles.statsStyle}>
            <Caption>
              <Icon name="staro" color={theme.colors.primary} />
              4.5 (28)
            </Caption>
            <Caption>$$</Caption>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapViewStyle: {
    padding: 10,
  },
  cardStyle: {
    elevation: 5,
  },
  cardContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 8,
  },
  statsStyle: {
    alignItems: 'flex-end',
  },
});

export default withTheme(BakeryCard);
