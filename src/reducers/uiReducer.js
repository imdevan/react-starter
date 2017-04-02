import * as types from '../actions/uiActions';

// state = [] : Start out with no accounts
export default function ui(state = [], action){
  switch(action.type){

    case types.SET_CURRENT_TAB:
      return {...state,
        currentTab: action.currentTab
      };

    case types.UI_ERROR:
      return {...state,
        error: action.error
      };

    case types.IS_SHOW_NAV_BAR:
      return {...state,
        showNavBar: action.showNavBar
      };

    case types.IS_SHOW_SIDE_BAR:
      return {...state,
        showSideBar: action.showSideBar
      };

    case types.IS_SHOW_POP_UP:
      return {...state,
        popUp: {
          show: action.show,
          obj: action.obj
        }
      };

    default:
      return state;
  }
}
