<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ganador; 


class GanadorController extends Controller
{
    //
    public function registrarGanador(Request $request){
        
        $ganador = new Ganador();
        $ganador->nombre = $request->nombre; 
        $ganador->save(); 

        return response()->json(['mensaje' => 'Se ha registrado con éxito']);
    }
    
}
