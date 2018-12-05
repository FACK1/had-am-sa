const search_btn = document.getElementById('searchButton');

var text = document.getElementById('search_text');

var artistflag = document.getElementsByName('category')[0];

function search() {
	search_btn.addEventListener("click", function (e) {
			var category;
      text = text.value;
      console.log(text);
			if (artistflag.checked) {
				category = "artist";
			} else {
				category = "song";

          console.log(category);

			}

			fetch(`/search?category=${category}&text=${text}`)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
          console.log(data);
					if (data.length <= 0) {
						alert("Sorry, No Match Found");
					} else {
            viewSerachRes(data);
          }
				})
        .catch(function (err) {
					return console.log(err)
				})
		})
	}

function viewSerachRes(data){

}

	search();
