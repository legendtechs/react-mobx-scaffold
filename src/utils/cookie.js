// Operation Cookie
export function getCookie (name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = window.document.cookie.match(reg);
  if (arr) {
    return decodeURIComponent(arr[2]);
  } else {
    return null;
  }
}

export function delCookie (name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) {
    window.document.cookie = `${name}=${cval};expires=${exp.toGMTString()}`;
  }
}

// export function delCookie({ name, domain, path }) {
//   if (getCookie(name)) {
//     window.document.cookie = `${name}=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=${path}; domain=${domain}`
//   }
// }

export function setCookie (name, value, expiredays) {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  window.document.cookie = `${name}=${escape(value)}${(expiredays == null) ? '' : `;expires=${exdate.toGMTString()}`}`;
}

// Operation LocalStorage
export function setLocalStorage (key, vaule) {
  return window.localStorage.setItem(key, JSON.stringify(vaule));
}

export function getLocalStorage (key) {
  const value = JSON.parse(window.localStorage.getItem(key)) || '';
  return value;
}

// Operation sessionStorage
export function setSessionStorage (key, vaule) {
  return window.sessionStorage.setItem(key, JSON.stringify(vaule));
}

export function getSessionStorage (key) {
  const item = window.sessionStorage.getItem(key);
  let value = '';
  if (!!item && item !== 'undefined') {
    value = JSON.parse(item);
  }
  return value;
}

export default {
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
  getCookie,
  setCookie,
  delCookie
};
