import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { BorderlessButton } from 'react-native-gesture-handler';

const renderMenuItem = ({ item }) => {
    return (
        <ListItem title={item.name}
        subtitle={item.price}>
            <Text>{item.price}</Text>
        </ListItem>
    );
}

const RenderMenu = (objArr) => {
    return (
        <FlatList
            data={objArr}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );

}

class FoodDrink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 'drinks'
        }
    }

    render() {
        const foodObj = this.props.screenProps.foodDrinkObj.food
        const drinksObj = this.props.screenProps.foodDrinkObj.drinks
        const selectedObj = () => {
            if (this.state.selectedMenu === 'drinks') {
                return drinksObj;
            }
            else if (this.state.selectedMenu === 'food') {
                return foodObj;
            }
            else {
                return <Text>Ooops!...</Text>
            } 
        }

        return (
            <View>
                <View styles={styles.buttonGroup}>
                    <View styles={styles.buttonStyles}>
                        <Button
                            icon={{name:'beer', type:'font-awesome', size: 23}}
                            title='Drinks'
                            onPress={() => {this.setState({selectedMenu: 'drinks'})}} 
                            buttonStyle={{ backgroundColor: "#0f521c" }}
                        />
                    </View>
                    <View>
                        <Button
                            icon={{name:'pizza-slice', type:'font-awesome', size:23}}
                            title='Food'
                            onPress={() => {this.setState({selectedMenu: 'food'})}}
                            buttonStyle={{ backgroundColor: "#0f521c"}}
                        />
                    </View>
                </View>
                <View>
                    {RenderMenu(selectedObj())}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyles: {
        width: 50,
        height: 50,
        borderColor: "#000"
    }
});

export default FoodDrink;

