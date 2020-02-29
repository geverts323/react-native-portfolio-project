import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['contact@gamebar.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView>
                <Card title={"Contact Us!"}>
                    <Text>
                        12 Grimmauld Pl. {'\n'}
                        Schenectady, NY 12345 {'\n'}
                        U.S.A. {'\n'}
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234 {'\n'}
                        Email: contact@gamebar.co
                    </Text>
                    <Button
                        title="Send us an Email!"
                        buttonStyle={{ backgroundColor: '#0f521c', margin: 40 }}
                        icon={<Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle={{ marginRight: 10 }}
                        />}
                        onPress={() => this.sendMail()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;