// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendsArray = [
	{
	  "name":"Suzie Q",
	  "photo":"http://hairstylesg.com/wp-content/uploads/2017/04/dirty-blonde-hair-photo-10.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	},
	{
	  "name":"Boo",
	  "photo":"https://vignette.wikia.nocookie.net/pixar/images/7/7c/Boo.png",
	  "scores":[
	      5,
	      2,
	      4,
	      4,
	      5,
	      4,
	      2,
	      3,
	      4,
	      2
	    ]
	}
];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;