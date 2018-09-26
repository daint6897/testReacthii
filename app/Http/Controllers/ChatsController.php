<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;
class ChatsController extends Controller
{
public function __construct()
{
  $this->middleware('auth');
}

/**
 * Show chats
 *
 * @return \Illuminate\Http\Response
 */
public function index($id)
{
	// return $id;
  	return view('chat');
}

/**
 * Fetch all messages
 *
 * @return Message
 */
public function fetchMessages($id)
{
  return Message::with('user')->where('user_id_receive','=',$id)->latest()->limit(5)->get();
}

/**
 * Persist message to database
 *
 * @param  Request $request
 * @return Response
 */
public function sendMessage(Request $request)
{


  $user = Auth::user();
  // $user = "123123123123";

  $message = $user->messages()->create([
    'message' => $request->input('message'),
    'user_id_receive'=>$request->input('user_id_receive')
  ]);
  broadcast(new MessageSent($user, $message))->toOthers();
    return ['status' => 'Message Sent!'];
}
}
