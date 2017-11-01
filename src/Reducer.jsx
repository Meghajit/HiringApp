import {SET_LOGINSTATUS, SET_ERROR, SET_USER, LOG_OUT,SET_RESOURCEREQUESTDATA} from './Actions.jsx';

import update from 'immutability-helper';

const initialState = {
    loginstatus: null,
    loginData:{
                  name:null,
                  email:null,
                  job_role:null
              },
    requestdata:{
                  jobtitle:null,
                  comments:null,
                  hiringmanager:null
                }
}

const reducer = (state = initialState, action) => 
{
  switch (action.type) {
    case SET_ERROR:
      return update(state, {
        error: {
          $set: action.payload
        }
      })

    case SET_LOGINSTATUS:
      return update(state, {
        loginstatus: {
          $set: action.payload
        }
      });


 
      

    case SET_USER:
      return update(state, {loginData:{
                                        name:{$set:action.payload.loginData.name},
                                        email:{$set:action.payload.loginData.email},
                                        job_role:{$set:action.payload.loginData.job_role},
                                        // account_01_id:{$set:action.payload.account_01_id},
                                        // account_01_oneup_manager_id:{$set:action.payload.account_01_oneup_manager_id},
                                        // oneup_manager_email:{$set:action.payload.oneup_manager_email}
                                    }
                            }
  );

    case LOG_OUT:
      return update(state, {
        loginstatus: {
          $set: null
        },
        error: {
          $set: null
        },
        // loginData:{
        //             name:{$set:null},
        //             email:{$set:null},
        //             job_role:{$set:null}
        //           },
      });

      case SET_RESOURCEREQUESTDATA:
      return update(state,{requestdata:{  jobtitle:{$set:action.payload.jobtitle},
                                          comments:{$set:action.payload.comments},
                                          hiringmanager:{$set:action.payload.hiringmanager},
                                        }
                      
                          }
                        )


    default:
      return state;
    }
}

export default reducer;
