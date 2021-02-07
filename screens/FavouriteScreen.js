import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavouriteScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id ==='m1' || meal.id === 'm2')
    return <MealList listData={favMeals} navigation={props.navigation}/>;
    
};

FavouriteScreen.navigations = {
    headerTitle: 'Your Favorites'
};

export default FavouriteScreen;