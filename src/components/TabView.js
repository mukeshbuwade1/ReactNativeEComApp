// import {  } from 'native-base';
import * as React from 'react';
import { View,Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS } from '../assets/Colors';
import OrderTab from './OrderTab';
import ProfileTab from './ProfileTab';

const renderScene = SceneMap({
  Profile: ProfileTab,
  Orders: OrderTab,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Profile', title: 'Profile' },
    { key: 'Orders', title: 'Orders' },
  ]);

  const renderTabBar = props => (
        <TabBar
            {...props}
            style={styles.tabView}
            activeColor={COLORS.lightPrimary}
            inactiveColor={COLORS.white}
            indicatorStyle={{ backgroundColor: COLORS.primary }}
            // style={{ backgroundColor: 'pink', height: 30 }}
            renderLabel={({ route, color }) => (
                <Text style={{color, ...styles.tx}}>{route.title}</Text>
            )}
        />
    );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
tx:{
    fontSize:15,
    fontWeight:"600"
},
tabView:{
    backgroundColor:"#252525"
}
})