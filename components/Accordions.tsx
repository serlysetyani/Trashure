import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { List } from 'react-native-paper';

class MyComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section>
        <List.Accordion
          title="Pulsa"
          style={styles.containerAccordion}
          left={props => <List.Icon icon={require('../assets/images/iconPulsa.png')} />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Dana"
          style={styles.containerAccordion}
          left={props => <List.Icon icon={require('../assets/images/iconDana.png')}/>}
        >
          <List.Item title="First item"/>
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="LinkAja"
          style={styles.containerAccordion}
          left={props => <List.Icon icon={require('../assets/images/iconLinkAja.png')}/>}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    );
  }
}

const styles = StyleSheet.create({
    containerAccordion:{
        backgroundColor: '#FFF',
        width: '95%',
        alignSelf:'center',
        borderRadius: 4,
        marginBottom: 16
    }
})

export default MyComponent;