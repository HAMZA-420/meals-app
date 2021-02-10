import { State } from 'react-native-gesture-handler';
import {MEALS} from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals:MEALS ,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;