const search_btn = document.getElementById('searchButton');

var parentContainer = document.getElementById("searchResult");
var textInput = document.getElementById('search_text');
var artistflag = document.getElementsByName('category')[0];
function search() {
	search_btn.addEventListener("click", function (e) {
			var category;
      const text = textInput.value;
      console.log(text);
			if (artistflag.checked) {
				category = "artist";
			} else {
				category = "song";
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

		data.map(element => {

			parentContainer.innerHTML="";

			var name_artist = document.createElement('h1');
			name_artist.setAttribute('class', 'name_artist');
			name_artist.innerText = element.name;

			var img_artist = document.createElement('img');
			img_artist.setAttribute('class', 'img_artist');
			img_artist.src = element.img_url;
			img_artist.alt = "artist image";

			var songs_container = document.createElement('div');
			songs_container.setAttribute('class', 'songs_container');

			for (var i = 0; i < data.length; i++) {

				var song = document.createElement('div');
				song.setAttribute('class', 'song');

				var song_name = document.createElement('h1');
				song_name.setAttribute('class', 'song_name');
				song_name.innerText = data[i].title;

				var song_link = document.createElement('a');
				song_link.setAttribute('class', 'song_link');
				song_link.innerText = data[i].link;

				song.appendChild(song_name);
				song.appendChild(song_link);

				songs_container.appendChild(song);
			}
			parentContainer.appendChild(name_artist);
			parentContainer.appendChild(img_artist);
			parentContainer.appendChild(songs_container);
		});
}

	search();
