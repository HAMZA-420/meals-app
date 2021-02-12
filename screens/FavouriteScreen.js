import React from 'react';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {useSelector} from 'react-redux';

const FavouriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)
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