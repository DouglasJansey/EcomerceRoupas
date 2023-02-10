const url = { uploadUrl: process.env.REACT_APP_URL_STORAGE, key: process.env.REACT_APP_API_KEY };
const urlStorage = `${url.uploadUrl}?key=${url.key}`;
export default urlStorage;
