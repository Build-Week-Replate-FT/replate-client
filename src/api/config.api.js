const { NODE_ENV, REACT_APP_REPLATE_PRODUCTION, REACT_APP_REPLATE_DEVELOPMENT } = process.env;
const baseURL = NODE_ENV === 'production' ? REACT_APP_REPLATE_PRODUCTION : REACT_APP_REPLATE_PRODUCTION;

export { baseURL };
