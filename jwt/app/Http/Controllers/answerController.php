<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;


class answerController extends Controller
{
    public function getAllAnswersByServeyId(Request $request){
        $sid->answers=$request->answer
        
        return response()->json([
            "status" => "Success",
            "answers" => $answers
        ], 200);
    }

}
