var express = require('express');
var request = require('request');


FB.api(
    "/{user-id}/friends",
	function (response) {
		if (response && !response.error) {
			/* handle the result */
		}
	}
);

// Simply logging into Facebook via their JavaScript SDK:
FB.login(function(response) {
  // assuming a valid response executing this FQL:
    FB.api('/me/friends', function(response) {
	    console.log('me', response);
	});
}, 
{
scope: 'email,user_status,user_checkins,user_likes,user_interests,user_location,friends_location'});


// these are the contents of service response as a JS object
{
	data: [
	// {friend}, {friend}, {friend}
	],
	paging: {
		next: "https://graph.facebook.com/1622858194/friends?fields=name,id,picture,location&access_token=AAAGiqQRrYC0BAEyuZAx5EiCwgeGSDjVDuvZAFbXsnxNCN1jtTxySb0YNCp64sFIXEQrh8G10dfI0FORcvqYEikCGJeqfdcfsPZAEfxO35JkKduYk0ZAL&limit=5000&offset=5000&__after_id=100003306574801"
	}
}

// what a particular "friend" object looks like as a JS object
{
	id: "554913068"   // friend's FB object id
	location: {
		id: "115590505119035"   // Denver, CO FB object id
		name: "Denver, Colorado"
	}
	name: "Sean Willsey"
	picture: {
		data: {
			is_silhouette: false
			url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/371808_554913068_758557840_q.jpg"
		}
	}
}
