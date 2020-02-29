import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Card, Image } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            someTrigger: false
        }
    }

    render() {

        const renderHomeCard = ({ item }) => {
            return (
                <Card title={`Featured ${item.type}: ${item.name}`} style={{justifyContent: 'center'}}>
                    <Image source={{ uri: item.image }} style={{ width: 350, height: 200, justifyContent: 'center' }} PlaceholderContent={<ActivityIndicator />} />
                    <Text>{item.description}</Text>
                </Card>
            )
        

        }

        console.log(JSON.stringify(this.props.screenProps.homeObj));
        return (
            <FlatList
                data={this.props.screenProps.homeObj}
                renderItem={renderHomeCard}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;