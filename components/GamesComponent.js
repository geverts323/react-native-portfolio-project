import React, { Component} from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Header, Card, Image, Icon } from 'react-native-elements';


class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameInfoModal: false,
            gameId: 0
        }
    }

    toggleModal() {
        this.setState({
            gameInfoModal: !this.state.gameInfoModal
        })
    }

    changeModalGame(gameId) {
        this.setState({
            gameId
        })
    }

    renderGameInfoModal = () => {
        const game = this.props.screenProps.gamesObj.filter(item => item.id === this.state.gameId)[0];
        if (game.image) {
            return (
                <Card title={game.name}>
                    <Image source={{ uri: game.image }} style={{ width: 300, height: 200, marginLeft: 10 }} />
                    <Text>{game.description}{'\n'}</Text>
                    <Text>Num. Players: {game.numPlayers}</Text>
                    <Text>Copies We Have: {game.quantity}</Text>
                </Card>
            );
        }
        return (
            <Card title={game.name}>
                <Text>{game.description}</Text>
                <Text>Num. Players: {game.numPlayers}</Text>
                <Text>Copies We Have: {game.quantity}</Text>
            </Card>
        );
    }

    render() {
        const renderGameMenuItem = ({ item }) => {
            return(
                <ListItem 
                    title={item.name}
                    chevron
                    onPress={() => {
                        this.changeModalGame(item.id);
                        this.toggleModal();
                    }}
                    style={{
                        borderWidth: 0.2
                    }}
                />
            )
        }
        
        return(
            <View>
                <Header
                    centerComponent={{
                        text: "Our Games", style: {
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            paddingBottom: 20,
                            color: '#fff',
                            fontSize: 18
                        }}}
                    containerStyle={{ 
                        backgroundColor: '#053b07',
                        height: 50
                    }}
                />
                <FlatList
                    data={this.props.screenProps.gamesObj}
                    renderItem={renderGameMenuItem}
                    keyExtractor={item => item.id.toString()}
                />
                <View
                    style={{
                        backgroundColor: 'rgba(0,1,0,1)',
                        paddingTop: 50,
                        padding: 10,
                        paddingBottom: 40,
                        height: 1200
                    }}
                >
                    <Modal 
                        visible={this.state.gameInfoModal}
                        onRequestClose={() => {
                            this.toggleModal();
                        }}
                        transparent={true}
                        animationType="slide"
                        style={{justifyContent: "center"}}
                        onBlur={() => {
                            this.toggleModal();
                        }}
                    >
                        <Icon
                            name='times'
                            type='font-awesome'
                            onPress={() => this.toggleModal()}
                            raised
                            reverse
                            size={10}
                        />
                        {this.renderGameInfoModal(this.state.gameId)}
                    </Modal>
                </View>
            </View>
        )
    }
}

export default Games;