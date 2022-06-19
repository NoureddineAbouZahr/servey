<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Choice;


class quchoiceController extends Controller
{
    public function getChoicesByQuestionId(Request $qid){
        $choices = Choice::where("question_id", "=", "$qid->q_id");
        
        return response()->json([
            "status" => "Success",
            "results" => $choices
        ], 200);
    }
    public function addChoice(Request $request){
        $ch = new Choice;
        $ch->choice = $request->choice;
        $ch->question_id = $request->question_id;
        $ch->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
