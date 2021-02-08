import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavouriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    return <MealList listData={favMeals} navigation={props.navigation}/>;
    
};

FavouriteScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Favourite Meals',
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>
    )
   }
};

export default FavouriteScreen;