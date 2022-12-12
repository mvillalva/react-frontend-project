import { logOut } from "./firebaseActions";

export const TYPE = {
  profiles : 'PS',
  currentProfile: 'CP',
  language: 'LG',
  user: 'US',
  loading: 'LO',
}

export const closeSession = (e) => {
  e.preventDefault();
  const state = JSON.parse(localStorage.getItem("appState"))
  
  if(state){
    state.profiles = []
    state.user = []
    state.current_profile = []

    localStorage.setItem("appState", JSON.stringify(state))
  }
  
  logOut();
  window.location.href = "/";
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const controlVideo = (vidFunc, e = null) => {
  if (e) {
    e.preventDefault();
  }

  let iframe = document.getElementsByTagName("iframe")[0].contentWindow;

  iframe.postMessage(
    '{"event":"command","func":"' + vidFunc + '","args":""}',
    "*"
  );
};

export const VerifyEmail = (email) => {
  const verify = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return verify.test(email);
};
