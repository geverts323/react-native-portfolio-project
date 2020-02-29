import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon, Header } from 'react-native-elements';
import Home from './HomeComponent';
import FoodDrink from './FoodDrinkComponent';
import Games from './GamesComponent';
import Contact from './ContactComponent';
import FormsMenu from './FormsComponent';
import { FOOD_DRINKS } from '../shared/foodDrink';
import { GAMES_OBJ } from '../shared/games';
import { HOME_OBJECTS } from '../shared/homeObjects';


console.disableYellowBox = true;

const MainNav = createAppContainer(createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: <Icon
                    name='home'
                    type='font-awesome'
                    size={23}
                />
            }
        },
        FoodDrink: {
            screen: FoodDrink,
            navigationOptions: {
                tabBarIcon: <Icon
                    name='beer'
                    type='font-awesome'
                    size={23}
                />,
            }
        },
        Games: {
            screen: Games,
            navigationOptions: {
                tabBarIcon: <Icon
                    name='gamepad'
                    type='font-awesome'
                    size={23}
                />,               
            }
        },
        Contact: {
            screen: Contact,
            navigationOptions: {
                tabBarIcon: <Icon
                    name='address-card'
                    type='font-awesome'
                    size={20}
                /> ,          
            }
        }
    },
    {
        initialRouteName: 'Home',
        barStyle: { backgroundColor: '#0f521c'},
        backBehavior: 'history',
        labeled: true
    }
));

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodDrinkObj: FOOD_DRINKS,
            gamesObj: GAMES_OBJ,
            homeObj: HOME_OBJECTS
        }
    }

    render() {
        console.log(JSON.stringify(this.state))
        return ( 
            <SafeAreaView style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <Header
                    containerStyle={{ backgroundColor: '#0f521c'}}
                    centerComponent={{
                        text: 'Game Bar', style: styles.appTitle
                }}>

                </Header>
                <MainNav screenProps = {{
                    foodDrinkObj: this.state.foodDrinkObj,
                    gamesObj: this.state.gamesObj,
                    homeObj: this.state.homeObj,
                    someVal: "Name of Card"
                }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    appTitle: { 
        color: '#fff', 
        fontSize: 26, 
        fontWeight: 'bold',
        paddingBottom: 15
    }

})


export default Main;