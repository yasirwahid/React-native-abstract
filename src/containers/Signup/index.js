import React ,{Component} from 'react';
import { Image, View,Text } from 'react-native'
import { connect } from 'react-redux';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
     
        };
    }
render(){
    return(
        <View><Text>Signup</Text></View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)