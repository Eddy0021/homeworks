import request from "@/api/index";

export default class Api {
    static fetchAllMovies(){
        return request('/movies');
    }

    static fetchGetMovieByID(id: number){
        return request('/movies/'+id);
    }
}