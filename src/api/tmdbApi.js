import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    all: 'all'
}
export const mediaType = {
    all: 'all',
    movie: 'movie',
    tv: 'tv'
}
export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    trending: 'trending',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getTreanding: (type,params) =>{
        const url = '/meta/anilist/trending?page=1&perPage=10';
        return axiosClient.get(url, params);
    },
    getGenre: (type,params) =>{
        const url = 'genre/' + category[type] + "/list";
        return axiosClient.get(url, params);
    },
    getMoviesList: (type, params) => {
        if(params == null){
            params = {page:1};
        }
        const url = '/meta/anilist/' + movieType[type] + '?perPage=10&' + params.page;
        //console.log(url);
        return axiosClient.get(url, params);
    },
    getAiring: (type, params) => {
        const url = '/meta/anilist/airing-schedule';
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = '/meta/anilist/info/' + id;
        return axiosClient.get(url, params);
    },
    episodes: (id) => {
        const url = "tv" + '/' + id + '/season' + '/1';
        return axiosClient.get(url, {params: {}});
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;
