import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Text, Platform} from 'react-native';
import Colors from '../constants/Colors';
import FavouriteScreen  from '../screens/FavouriteScreen'; 
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/filtersScreen';

const defaultStackNavOptions = {
    headerStyle: {
           backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
       },
       headerTitleStyle: {
           fontFamily: 'open-sans-bold'
       },
       headerBackTitleStyle: {
           fontFamily: 'open-sans'
       },
       headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
   
}
const MealsNavigator= createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
        
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
}
);

const FavNavigator = createStackNavigator({
    Favorites: FavouriteScreen,
    MealDetail: MealDetailScreen
},  {
    defaultNavigationOptions:  defaultStackNavOptions
});


const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>: 'Meals'
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return (
            <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            );
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text>: 'Favorites'
    }}
};

const MealsFavTabNavigator =
 Platform.OS==='android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
     activeColor: 'white',
     shifting: true,
     barStyle: {
         backgroundColor: Colors.primaryColor
     }
 }) :createBottomTabNavigator(
    tabScreenConfig
    ,  {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
    }
});

const FiltersNavigator= createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator= createDrawerNavigator({
    MealsFav: {screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator

}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);