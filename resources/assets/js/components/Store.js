var redux = require('redux');
        var oldSate={
            num:["man hinh","chuot","ban phim"],
            editStatus:true
        }
        var reducer1=(state=oldSate,action)=>{
            switch (action.type) {
                case "CHANGE_EDIT":
                    return {...state,editStatus:!state.editStatus}
                    break;
                case "ADD_NEW": 
                    return {...state,num:[...state.num,action.newItem]}
                    break;
            
                default:
                    break;
            }
            return state;
        }

        var store1 = redux.createStore(reducer1);
        store1.dispatch({type:"CHANGE_EDIT"});
        store1.dispatch({
            type:"ADD_NEW",
            newItem:"tai nghe"
        });
        
        // console.log(store1.getState());
export default store1;