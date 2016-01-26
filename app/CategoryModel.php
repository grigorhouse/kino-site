<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
	public $timestamps = false;
	
    protected $fillable = [
    	'title',
    ];

    protected $table = 'categories';

    public function movies()
    {
    	return $this->hasManyThrough('MovieModel','CategoryMovieRel');
    }
}
