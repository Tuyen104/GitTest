import React, {Component} from 'react';
import {View, SectionList, Text, StyleSheet, AppRegistry} from 'react-native';

export default class SectionListBasics extends Component{
render(){
  return(
    <View style={styles.container}>
      <SectionList
      sections={[
        {title:'T', data:['Tuyen', 'Tam', 'Tien']},
        {title: 'D', data:['Dashy','Dinh','Dong','Datanasa']},
        {title: 'N', data:['Nam', 'Nani']}
      ]}
      renderItem={({item})=><Text style={styles.items}>{item}</Text>}
      renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
      keyExtractor={({item,index})=>index}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 22
  },
  sectionHeader:{
    paddingTop:10,
    paddingLeft: 2,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor:'lightblue'
  }, 
  items:{
    padding: 10,
    fontSize: 18
  }
})

AppRegistry.registerComponent('ReactNativeDemo', () => SectionListBasics);