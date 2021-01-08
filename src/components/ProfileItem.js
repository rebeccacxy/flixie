import React from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
import Icon from './Icon';
// import { Icon } from 'galio-framework';

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name,
  description,
  genre,
  date,
  rating
}) => {
  return (
    <View style={styles.containerProfileItem}>
      {/* <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          <Icon name="heart" /> {matches}% Match!
        </Text>
      </View> */}

      <Text style={styles.name}>{name}</Text>

      {/* <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text> */}

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon family="AntDesign" name="filter" />
        </Text>
        <Text style={styles.infoContent}>{genre}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon family="font-awesome" name="bar-chart" />
        </Text>
        <Text style={styles.infoContent}>{rating}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon family="AntDesign" name="calendar" />
        </Text>
        <Text style={styles.infoContent}>{date}</Text>
      </View>

      <View style={styles.info}>
        {/* <Text style={styles.iconProfile}>
          <Icon name="user" />
        </Text> */}
        <Text style={styles.infoContent}>{description}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
