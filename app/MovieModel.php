<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MovieModel extends Model
{
    protected $table = 'movies';

    protected $fillable = ['title', 'description', 'image', 'public'];

    public function categories()
    {
    	return $this->belongsToMany('App\CategoryModel', 'categories_rel_movie','movie_id', 'category_id');
    }
}
