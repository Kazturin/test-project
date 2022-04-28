<?php

namespace App\Http\Controllers;



use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
       return Contact::create(['user_id'=>$request->user_id,'contact_id'=>$request->contact_id])->user;
    }
    public function destroy(Request $request)
    {
        return Contact::where(['user_id'=>$request->user_id,'contact_id'=>$request->contact_id])->delete();
    }
}
