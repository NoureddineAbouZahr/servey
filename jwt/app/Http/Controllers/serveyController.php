<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Servey;
use Auth;

class serveyController extends Controller
{
    public function getAllServeys($id = null){
        if($id != null){
            $serveys = Servey::find($id);
        }else{
            $serveys = Servey::all();
        }
        
        return response()->json([
            "status" => "Success",
            "Serveys" => $serveys
        ], 200);
    }
    public function getserveyByadminId(){
        $servey=new Servey;
        $servey->uid=$aid=Auth::user()->id;
        $servey= Servey::where("uid", "=", "$aid")->get();
        
        return response()->json([
            "status" => "Success",
            "results" => $serveys
        ], 200);
    }

    public function addServey(Request $request){
        $servey = new Servey;
        $servey->name = $request->name;
        $servey->description = $request->description;
       
        $servey->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }



}

