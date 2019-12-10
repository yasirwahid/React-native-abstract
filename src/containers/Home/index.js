import React,{Component} from 'react';
import { Image, View,Text } from 'react-native'
import { connect } from 'react-redux';



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
     
        };
    }
render(){
    return(
        <View><Text>Home</Text></View>
    )
}




}

function mapStateToProps() {
    return ({})
}

function mapDispatchToProps(dispatch) {
    return ({
     
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)