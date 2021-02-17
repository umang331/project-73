import React from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class ReadStoryScr extends React.Component{
    state = {
        search: '',
        allStories:[],
      dataSource:[],
      };

      componentDidMount(){
        this.retrieveStories()
      }
    
      updateSearch = (search) => {
        this.setState({ search });
      };

      retrieveStories=()=>{
        try {
          var allStories= []
          var stories = db.collection("stories")
            .get().then((querySnapshot)=> {
              querySnapshot.forEach((doc)=> {
                  // doc.data() is never undefined for query doc snapshots
                  
                  allStories.push(doc.data())
                  console.log('this are the stories',allStories)
              })
              this.setState({allStories})
            })
        }
        catch (error) {
          console.log(error);
        }
      };
    
    
      SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.state.allStories.filter((item)=> {
          //applying filter for the inserted text in search bar
          const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          dataSource: newData,
          search: text,
        });
      }
    
      render() {
        const { search } = this.state;
    
        return (
            <View>
                <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          </View>
          <ScrollView>
              <View>
                {
                  this.state.search === "" ? 
                    this.state.allStories.map((item)=>(
                      <View style={{borderColor:'pink',borderWidth:2,padding:10,alignItems:'center',margin:30}}>
                        <Text>
                          Title : {item.title}
                        </Text>
                        <Text>
                          Author : {item.author}
                        </Text>
                      </View>
                    ))
                  :
                  this.state.dataSource.map((item)=>(
                    <View style={{borderColor:'pink',borderWidth:2,padding:10,alignItems:'center',margin:30}}>
                      <Text>
                       Title : {item.title}
                      </Text>
                      <Text>
                       Author : {item.author}
                      </Text>
                    </View>
                  ))
                }
              </View>
          </ScrollView> 
          
          </View>
        );
      }
    }

const styles = StyleSheet.create({
    Story:{
        marginTop:45,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center'
    },
    story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'times'
    },
    moral:{
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'times'
    },
    storyIn:{
        textAlign: 'left',
        fontSize: 20,
        margin: 15
    },
    head:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'times',
        margin: 25,
        marginBottom:-15,
        color: 'blue'
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'aqua',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'times'
    }
})