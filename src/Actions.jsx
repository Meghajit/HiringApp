import Cookies from 'universal-cookie';
import './components/history.jsx'
import axios from 'axios'
export const SET_LOGINSTATUS = 'SET_LOGINSTATUS';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const SET_RESOURCEREQUESTDATA= 'SET_RESOURCEREQUESTDATA';

const makeActionCreator = function(actionType) {
    return function(payload) {
        return {type: actionType, payload: payload}
    }
}

const setLoginstatus = makeActionCreator(SET_LOGINSTATUS);
const setError = makeActionCreator(SET_ERROR);
const setUser = makeActionCreator(SET_USER);
const logOut = makeActionCreator(LOG_OUT);
const setResourceRequestData=makeActionCreator(SET_RESOURCEREQUESTDATA);

const cookies = new Cookies();

export const login = (login_id, password) => {
    
    return (dispatch) => {
           var result;
        fetch('http://'+window.location.hostname+':5000/api/auth/', 
                    {
                        method: 'POST',
                        headers: {'Accept': 'application/json','Content-Type': 'application/json', },
                        body: JSON.stringify({email: login_id, pass: password})  
                    }
                )
            .then(response => response.json())
            .then(response => {       
                                        
                                        if (response.status==="Authenticated")
                                        {cookies.set('loginstatus', response.status,{maxAge:6000000});
                                        } 
                                        else
                                        return dispatch(setError("Login Errors"));
                                        
                                        var newLoginData={
                                                              loginData:{
                                                              account_01_id:response.account_01_id,
                                                              email:login_id,
                                                              account_01_oneup_manager_id:response.account_01_oneup_manager_id,
                          
                                                        }
                                        }
                                     dispatch(setLoginstatus(response.status));
                                     dispatch(setUser(newLoginData));
                                     result=response.status;
                                }) ;
            return result;
          
    }
    
    
  }
  

export const getDashboard = (loginstatus) => {
  return (dispatch, getState) => {
        if (loginstatus==="Authenticated")
        {
            dispatch(setLoginstatus(loginstatus));
            
        }
        else {
          return dispatch(setError("Login Error"));
        }
      
  
  }
}

export const processResourceRequest = (requestdata) => {
  return (dispatch, getState) => {
       dispatch(setResourceRequestData(requestdata));
      
  
  }
}

export const loadLoginstatusFromCookie = () => {
  return (dispatch) => {
    const loginstatus = cookies.get('loginstatus');
      if (loginstatus==="Authenticated") {
        // alert("User is Authenticated")
        dispatch(setLoginstatus(loginstatus));
        dispatch(getDashboard());
        // alert("loginstatus is : "+loginstatus);
      }
      // else alert("user is not authenticated");
    }
}
export const setLoginstatus1=(loginstatus)=>{
  return (dispatch)=>{
    dispatch(setLoginstatus(loginstatus));
  };
}
export const setUser1=(newuserdata)=>{
  return (dispatch)=>{
    dispatch(setUser(newuserdata));
  };
}


export const userLogOut = () => {
  return (dispatch) => {
    dispatch(logOut());
    
    cookies.remove('loginstatus');
  }
}