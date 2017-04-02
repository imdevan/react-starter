export const IS_LOADING = 'IS_LOADING';
export const IS_SHOW_ACTIVITY_MENU = 'IS_SHOW_ACTIVITY_MENU';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const IS_SHOW_NAV_BAR = 'IS_SHOW_NAV_BAR';
export const IS_SHOW_SIDE_BAR = 'IS_SHOW_SIDE_BAR';
export const IS_SHOW_POP_UP = 'IS_SHOW_POP_UP';
export const UI_ERROR = 'UI_ERROR';

export function loadingChanged(isLoading){
  return { type: IS_LOADING, isLoading: isLoading};
}
export function showActivitySocialMenu(showMenu){
  return {type: IS_SHOW_ACTIVITY_MENU, showActivityMenu: showMenu}
}
export function setCurrentTab(currentTab){
  return {type: SET_CURRENT_TAB, currentTab: currentTab}
}
export function showSideBar(sideBar){
  return{type: IS_SHOW_SIDE_BAR, showSideBar: sideBar}
}
export function showNavBar(navBar){
  return{type: IS_SHOW_NAV_BAR, showNavBar: navBar}
}
export function showPopUp(popUp, obj){
  return{type: IS_SHOW_POP_UP, show: popUp, obj}
}
