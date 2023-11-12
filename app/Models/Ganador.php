<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ganador extends Model
{
    public $timestamps = false;
    protected $table = 'ganadores';
    protected $fillable = ['nombre'];
}
