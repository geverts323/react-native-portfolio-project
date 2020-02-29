import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';

function RenderMenu(objArr) {
    const renderDrinkMenuItem = ({ item }) => {
        return(
            <ListItem title={item.name}>
                <Text>{item.price}</Text>
            </ListItem>
        );
    }
    return(
        <FlatList
            data={objArr}
            renderItem={renderDrinkMenuItem}
            keyExtractor={item.id.toString()}
        />
    );

}

export default RenderMenu;