import React,{ Component} from 'react';
import {TouchableHighlight,Animated, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,Keyboard,FlatList} from 'react-native';
import  {Svg,Path} from 'react-native-svg';
import _ from 'lodash'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Details extends React.Component {
      constructor(props)
        {
          super(props)
          this.state = { 
              animal:{}
                }
                }
        
    
    
componentDidMount= ()=>
 {
   try
   {
       let animaldetail=JSON.parse(this.props.navigation.state.params.detail)
   this.setState({animal:animaldetail})
  console.log(JSON.stringify(this.props.navigation.state.params.detail))
   
 }
 catch(e)
 {
     console.log(e +'err' +JSON.stringify(e))
 }
}

back=()=>
{
  return(
  <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 34 32">
  <Path fill='#007aff' d="M13.091 9.697l-4.752 4.848 4.752 4.848c4.267 4.267 4.945 4.655 6.206 3.394s1.067-1.842-1.842-4.849l-3.297-3.394 3.297-3.394c2.909-3.006 3.103-3.588 1.842-4.848s-1.939-.873-6.206 3.394z"></Path>
</Svg>
  )
}
onGoback = () =>
{
  this.props.navigation.navigate('List')

}
 render() 
 {
   return(
    <View style = {{flex:1}}> 
        <View style={{ flexDirection: 'column'}}>
        <View style = {{flexDirection: 'column',width:wp('100%'),height:hp('50%%'),backgroundColor:'#0000ff'}}>

        <TouchableOpacity style={{alignItems:"flex-start",marginTop:hp("10%"),marginHorizontal:wp('2%')}} onPress={()=>this.onGoback()}>
                {this.back()}
           
            </TouchableOpacity>
            <Image resizeMode="contain"  style={{marginTop:hp('2%'),width:wp('100%'),height:hp('8%'),borderRadius:80,justifyContent:'center',alignItems:'center'}} source={{uri:this.state.animal.image}}/>
            <Text style ={{color:'#ffffff',fontSize:24,marginTop:hp('1%'),textAlign:'center'}}>{this.state.animal.name}</Text>
            <Text style ={{color:'#ffffff',fontSize:18,marginTop:hp('1%'),textAlign:'center'}}>{this.state.animal.affiliation}</Text>
</View>
          <View style={{flexDirection: 'column', height:hp('50%'),width:wp('100%'),backgroundColor:'#68BBE3'}}>
            <Text style ={{color:'#0000FF',fontSize:14, marginHorizontal:wp('6%'),marginTop:hp('10%'),textAlign:'left'}}>DOB:</Text>
            <Text style ={{color:'#FFF',fontSize:12, marginHorizontal:wp('6%'),marginTop:hp('1%'),textAlign:'left'}}>{this.state.animal.dob}</Text>
            <Text style ={{color:'#0000FF',fontSize:14, marginHorizontal:wp('6%'),marginTop:hp('3%'),textAlign:'left'}}>SEX:</Text>
            <Text style ={{color:'#FFF',fontSize:12, marginHorizontal:wp('6%'),marginTop:hp('1%'),textAlign:'left'}}>{this.state.animal.sex}</Text>
            <Text style ={{color:'#0000FF',fontSize:14, marginHorizontal:wp('6%'),marginTop:hp('3%'),textAlign:'left'}}>More about me:</Text>
            <Text style ={{color:'#FFF',fontSize:12, marginHorizontal:wp('6%'),marginTop:hp('1%'),textAlign:'left'}}>{this.state.animal.note}</Text>

           </View>
          
 </View>
 
</View>

            
   )}}
 