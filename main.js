var blogPosts = [
	{
		Title:"Dustin Goes To The Store";
		Image:"images/store.jpg";
		Copy:"One time in January I went to the store. I needed bread and milk, I wish I had coupons but I didn't. Life's a trip."
		Date:"20 Jan, 2017"
	},
	{
		Title:"Dustin Goes To The Dentist";
		Image:"images/dentist.jpg";
		Copy:"One time I went to the dentist. This dentist kept touching my nose, which in turn made me have to sneeze. I sneezed on the man's face. It was silent afterward."
		Date:"15 March, 2017"
	}
	{
		Title:"Does Goes To The Park";
		Image:"images/park.jpg";
		Copy:"Some friends of mine invited me to the park. It was raining though, so we went to the movies."
		Date:"9 Apr, 2017"
	},
	{
		Title:"Dustin Goes To Detroit";
		Image:"images/detroit.jpg";
		Copy:"Don't believe the hype. Detroit is not fun. 0/10, would never Detroit again."
		Date:"23 Feb, 2016"
	}
];

var blogPostsLength = blogPosts.length;



for ( var i = 0; i < blogPostsLength; i++) {
	if (i < 2) {
	document.getElementById('row1').innerHTML += `<div class= "eachProduct">
						<img src="${blogPosts[i].Image}" width="300px" height="300px">
						<h2>${blogPosts[i].Title}</h2>
						<p class="Copy">${blogPosts[i].Copy}</p>
						<p class="Date">${blogPosts[i].Date}</p>
					</div>
				</div>`;
	} else {
	document.getElementById('row2').innerHTML += `<div class= "eachProduct">
					<img src="${blogPosts[i].Image}" width="300px" height="300px">
					<h2>${blogPosts[i].Title}</h2>
					<p class="Copy">${blogPosts[i].Copy}</p>
					<p class="Date">${blogPosts[i].Date}</p>
				</div>
			</div>`;
	}
}