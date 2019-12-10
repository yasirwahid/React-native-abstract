import { DatabaseAction } from '../actions';
import firebase from 'react-native-firebase'

var realTimeRef1;
var realTimeRef2;

export class DatabaseMiddleware {

    static AddIntelligentTerm(uid, term, definition) {
        return (dispatch) => {
            firebase.database().ref("list").child(uid).push({ uid, term, definition, fav: false })
        }
    }

    static AddMyTerms(uid, term, definition) {
        return (dispatch) => {
            firebase.database().ref("MyTerms").child(uid).push({ uid, term, definition, fav: false })
        }
    }

    static GetIntelligentTerm(uid) {
        return (dispatch) => {
            realTimeRef1 = firebase.database().ref("list").child(uid);
            realTimeRef1.on("value", (snap) => {
                if (snap.val()) {
                    dispatch(DatabaseAction.GetIntelligentTerm(snap.val()))
                }
            })
        }
    }

    static GetMyTerms(uid) {
        return (dispatch) => {
            realTimeRef2 = firebase.database().ref("MyTerms").child(uid);
            realTimeRef2.on("value", (snap) => {
                if (snap.val()) {
                    dispatch(DatabaseAction.GetMyTerms(snap.val()))
                }
                else {
                    dispatch(DatabaseAction.GetMyTerms([]))
                }
            })
        }
    }

    static RemoveMyTerms(payload) {
        return (dispatch) => {
            firebase.database().ref("MyTerms").child(payload[1].uid).child(payload[0]).remove()
        }
    }

    static SignOff() {
        realTimeRef1.off("value")
        realTimeRef2.off("value")
    }

    static SetFavorite(payload, fav) {
        return (dispatch) => {
            firebase.database().ref("list").child(payload[1].uid).child(payload[0]).update({ fav: fav })
        }
    }

}