import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MovieService{

	apiKey: string;

	constructor(private _jsonp:Jsonp){
		this.apiKey = 'ceb9b1c1a1231836a2d2709cdb80413a';
		console.log("Movie Service initialized");
	}

	getPopular(){
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?api_key=ceb9b1c1a1231836a2d2709cdb80413a&callback=JSONP_CALLBACK&sort_by=popularity.desc')
			.map(res => res.json());
	}

	getInTheatres(){
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key=ceb9b1c1a1231836a2d2709cdb80413a')
            .map(res => res.json());
	}



	searchMovies(searchStr:string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key=ceb9b1c1a1231836a2d2709cdb80413a')
            .map(res => res.json());
    }


        getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key=ceb9b1c1a1231836a2d2709cdb80413a')
            .map(res => res.json());
    }

}
