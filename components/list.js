import React,{ Component} from 'react';
import {TouchableHighlight,Animated, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity ,Image,Keyboard,FlatList} from 'react-native';
import Constants from 'expo-constants';
import  {Svg,Path} from 'react-native-svg';
import Pagination,{Icon,Dot} from 'react-native-pagination'
import _ from 'lodash'
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class List extends React.Component {
      constructor(props)
        {
          super(props)
          this.state = { 
               list: "",list:[] ,listTemp:[],leftPosition:10,pageTitle:"Elephants",filteredData:[],
                }
                }
        
    
    search = () =>
    {
      return(
        <Svg id='Capa_1' width="10" height="10" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966'>
        <Path fill='#bdbdbd' d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z'/>
        </Svg>
      );
    }
    searchframe = () =>
     {
      this.setState ({leftPosition : 10,pageTitle:"Elephants",list:[]})
     }
    searchframe2 = () =>
    {
      this.setState ({leftPosition : 80, pageTitle:"Elephants",list:this.state.listTemp})
    }
    handlesearch = (txt) => {
console.log("clieck" + txt)
    let  text=txt;

   let filteredData = []; 
   let bodyobj= this.state.listTemp.filter((i)=>{
    console.log( i.name + 'fffffffffffff ')

      if(i.name && i.name != "doodle"){

          return i
      }
    });

    if(text)
    {  

        console.log(bodyobj+ 'kkkk')
      filteredData=bodyobj.filter(item=>{
console.log(item.name.toLowerCase().indexOf(text.toLowerCase()))
         if(item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
         return item;
        });
        this.setState({txt:txt,pageTitle:"Elephants",list:filteredData})
    }    
    else
    this.setState({txt:txt,pageTitle:"Elephants",list:bodyobj})
      
     }
    onpressfunc=()=>
    {
      try{
      this.setState({pageTitle:"Elephant Search",list:this.state.filteredData})
      }
      catch(e)
      {}
    }
    
    
componentDidMount= async()=>
 {
   try
   {
   await axios.get("https://elephant-api.herokuapp.com/elephants")
   .then(response => 
        {
          const bodyobj1 =response.data;
          console.log('sssss111111111' + (bodyobj1) + 'fffffffffffff ')
          var bodyobj = bodyobj1;
          // bodyobj=bodyobj.filter((i)=>{
          //   console.log( i.name + 'fffffffffffff ')

          //     if(i.name && i.name != "doodle"){

          //         return i
          //     }
               this.setState({list:bodyobj})
                 this.setState({listTemp:bodyobj})
                
//            })
          
     }).then(function(err){
         console.log(err + 'errorrrrrr')
       })
                 
       .then(function () {
      });
    
 }
 catch(e)
 {
     console.log(e +'err')
 }
}
movenxt=(list)=>
{
    console.log(JSON.stringify(list)+'lllllllllll')
    let List=JSON.stringify(list)
    this.props.navigation.navigate('Details',{detail:List})
}
onPressItem = (item) => console.log("onPressItem:item ",item);
 _keyExtractor = (item, index) => index.toString();
 onViewableItemsChanged = ({ viewableItems, changed }) =>this.setState({viewableItems})
              
               
_renderItem1 =({item,index}) => {

     return (
       
        <TouchableHighlight underlayColor="#EDE7E7" style={{height:hp('9%'),backgroundColor:'#EDE7E7',margin:'2%'}} key={'t'+index} activeOpacity = { .5 } pointerEvents='None' onPress={()=>{this.movenxt(item)}} >
        <View key={'l'+index}>
         <View key={'m'+index} style={{width:wp('50%'),height:hp('9%'),flexDirection:'row'}}> 
         <Image resizeMode="contain" key={'n'+index} style={{width:wp('10%'),height:hp('9%'),borderRadius:40,marginLeft:wp('2%')}} source={{uri:item.image}}/>
          <Text key={'k'+index} style={{marginTop:hp('2%'),fontSize:17,color:'#000000',marginLeft:wp('4%')}}>{item.name}</Text>
         </View>
                </View>
       </TouchableHighlight>
       
     )
}

 render() 
 {
             let bodyobj= this.state.list.filter((i)=>{
            console.log( i.name + 'fffffffffffff ')
              if(i.name && i.name != "doodle"){
                  return i
              }
            });
   const {navigate} = this.props.navigation;
   return(
    <View style = {{flex:1}}> 
    <View style = {styles.subcontainer}>
          <View style={{flexDirection: 'column', width:wp('98%'),paddingLeft: 0, paddingTop : 15,borderBottomLeftRadius: 0,borderBottomRightRadius: 0,borderColor:'#bdbdbd'}}>
           <View style={{ height:hp('15%')}} >
            <Text style ={{color:'#000000',fontSize:36, marginHorizontal:12,marginTop:40,textAlign:'left',height:hp('20%'),marginLeft: 15,}}>{this.state.pageTitle}</Text>
           </View>
          <View style={{flexDirection: 'row',width:wp('100%'),justifyContent:'flex-start'}}>
           <View style={{borderWidth:1,borderColor:'#cccccc',borderRadius:6,width:wp('75%'),height:hp('4%'),marginHorizontal:hp('5%')}}>
            <View style={{flexDirection:'row'}}>
              <View style = {[styles.searchicon]}>
                <TouchableOpacity activeOpacity = { .5 } onPress={()=>this.onpressfunc()} pointerEvents='None' >{this.search()}</TouchableOpacity>
              </View>
              <View style={{width:'50%',marginTop:3,marginBottom:3}}>
                <TextInput style={{marginLeft:3,fontSize:14,fontFamily:'Roboto'}}
                 onChangeText={(txt) => { this.handlesearch(txt) }} 
                 placeholder='Search'
                 placeholderTextColor='#999999'/>
              </View>
               
       </View>
     </View>
 </View>
  {this.state.list && <View style = {{width:wp('100%'),height:hp('77%')}}>
    <FlatList 
          data={bodyobj}
          ref={r=>this.refs=r}//create refrence point to enable scrolling
          keyExtractor={this._keyExtractor}//map your keys to whatever unique ids the have (mine is a "id" prop)
          renderItem={this._renderItem1}//render each item
          onViewableItemsChanged={this.onViewableItemsChanged}
    />    
      <Pagination
          debugMode
          dotIconNameActive="contacts"
          dotTextColor="red"
          dotSwapAxis
          dotPositionSwap
          dotTextColorActive="green"
          dotTextColorNotActive="red"
          dotTextColorEmpty="#4b5258"
          dotIconColorActive="green"
          dotIconColorNotActive="red"
          dotIconColorEmpty="#4b5258"
          dot={Size=12}
          paginationStyle={{ width:wp('95%'),alignItems:"flex-end", justifyContent: 'space-around', position:"absolute", margin:'2%', bottom:hp('20%'), left:0, right:0, padding:0, flex:1,height:hp('50%'),}}
          listRef={this.refs}
          paginationVisibleItems={this.state.viewableItems}
          paginationItems={this.state.list}
          paginationItemPadSize={1} 
      />
</View> 
           }
     </View>
 
   </View>

 </View>
            
   )}}
 const styles=StyleSheet.create({
      container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop:Constants.statusBarHeight,
      },
      
      searchicon: {
        marginLeft:80,marginTop:7,marginBottom:5, width:'5%'
          },
            subcontainer:{
              height:hp('91%'),
              width:wp('100%'),
              
            },
            
        
        })