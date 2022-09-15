const apiConfig = {
    baseUrl: 'https://consumet-api.herokuapp.com/',
    apikey: '5136e1d0babe7ebe6c75976bec09bac4' ,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,

}
export default apiConfig;