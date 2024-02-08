import request from "@/api/index";

export default class Api {
    static fetchAllMovies(){
        return request('/movies');
    }
}