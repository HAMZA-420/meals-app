import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import FavouriteScreen  from '../screens/FavouriteScreen'; 
import {Ionicons} from '@expo/vector-icons';

const MealsNavigator= createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
        
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
         headerStyle: {
                backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
        
    }
}
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Favorites: {screen: FavouriteScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
    }}
},  {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);