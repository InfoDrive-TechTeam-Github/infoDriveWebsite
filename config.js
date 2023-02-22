const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://infodrive.web3dapps.world/api' // development api
    : 'http://infodrive.web3dapps.world/api'; // production api

export {
    apiUrl
};