import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {setFilters} from '../store/actions/meal'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch 
               // trackColor ={{true: Colors.accentColor}}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor: ''}
                value={props.state} 
                onValueChange={props.onChange}
                />
            </View>
    )
}

const FiltersScreen = props => {
    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVeganFree, setIsVeganFree] = useState(false);
    const [isVegetarianFree, setIsVegetarianFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            Vegan: isVeganFree,
            Vegetarian: isVegetarianFree
        };
        dispatch(setFilters(appliedFilters));
    },[isGlutenFree, isLactoseFree, isVegetarianFree, isVeganFree]);
    useEffect(() => {
        navigation.setParams({save: saveFilters});
    },[saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan-free' state={isVeganFree} onChange={newValue => setIsVeganFree(newValue)}/>
            <FilterSwitch label='Vegetarian-free' state={isVegetarianFree} onChange={newValue => setIsVegetarianFree(newValue)}/>

        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Filter Meals',
    headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={() => {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>
    ),
    headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
        </HeaderButtons>
    )
   }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;