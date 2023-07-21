export const BASE_URL = (() => {
    const initUrl = process.env.REACT_APP_API_URL.trim();
    if(initUrl.slice(initUrl.length- 1) === '/') {
        return initUrl.slice(0, initUrl.length - 1);
    }
    else {
        return initUrl;
    }
})()
export const TIMEOUT = 10000
console.log(BASE_URL);
console.log(process.env.REACT_APP_API_URL)