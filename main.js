var blogPosts = [
	{
		Title:
		Image:
		Copy:
		Date:
	},
	{
		Title:
		Image:
		Copy:
		Date:
	}
	{
		Title:
		Image:
		Copy:
		Date:
	},
	{
		Title:
		Image:
		Copy:
		Date:
	}
];



for ( var i = 0; i < blogPosts.length; i++) {
	if (i < 2) {
	document.getElementById('row1').innerHTML += `<div class= "eachProduct">
						<img src="${products[i].imgUrl}" width="300px" height="300px">
						<h2>${products[i].name}</h2>
						<p class="description">${products[i].description}</p>
						<p class="price">${products[i].price}</p>
					</div>
				</div>`;
	} else {
	document.getElementById('row2').innerHTML += `<div class= "eachProduct">
					<img src="${products[i].imgUrl}" width="300px" height="300px">
					<h2>${products[i].name}</h2>
					<p class="description">${products[i].description}</p>
					<p class="price">${products[i].price}</p>
				</div>
			</div>`;
	}
}