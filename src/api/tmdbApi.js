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
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const tmdbApi = {
    getTreanding: (type,params) =>{
        const url = 'trending/' + mediaType[type] + "/day";
        return axiosClient.get(url, params);
    },
    getGenre: (type,params) =>{
        const url = 'genre/' + category[type] + "/list";
        return axiosClient.get(url, params);
    },
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
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
        const url = category[cate] + '/' + id;
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
