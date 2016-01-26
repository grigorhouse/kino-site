<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\MovieModel as Movie;
use DB;

class MoviesController extends Controller
{
	/**
	 * Listing all Movies
	 */
    public function index(Request $request)
    {
        return Movie::take($request->get('count'))->skip(0)->get();
    }

    /**
     * Deleting movie
     */
    public function destroy($id)
    {
        $movie = Movie::find($id);

        $movie->delete();
    }

    /**
     * Updating movie info
     */
    public function update($id, Request $request)
    {
        Movie::find($id)->update($request->all());
    }

    /**
     * Storing the movie
     */
    public function store(Request $request)
    {
        $movie = Movie::create($request->all());
        $movie->image = '/images/image-'.$movie->id.'.jpg';
        $movie->save();

        // Saving category relations
        foreach ($request->get('categories') as $key => $value) {
            DB::table('categories_rel_movie')->insert(array(
                'category_id' => $value,
                'movie_id'    => $movie->id
            ));
        }

        $request->file('poster')->move('images', 'image-'.$movie->id.'.jpg');
    }

    /**
     * Return current movie
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $movie = Movie::find($id);
        $movie->categories;

        return $movie;
    }
}
