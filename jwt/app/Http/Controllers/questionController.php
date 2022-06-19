<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class questionController extends Controller
{

    public function getAllQuestions($id = null){
        if($id != null){
            $questions = Question::find($id);
        }else{
            $questions = Question::all();
        }
        
        return response()->json([
            "status" => "Success",
            "questions" => $questions
        ], 200);
    }




    public function addQuestion(Request $request){
        $question = new Question;
        $question->name = $request->name;
        
        $question->type_id = $request->type_id;
        $question->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
