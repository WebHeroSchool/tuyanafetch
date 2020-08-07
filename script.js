fetch('https://api.github.com/users/tsidenova')
	.then(res => res.json())
	.then(json => {
		let linkProfile = document.getElementById('linkprofile');
		console.log(linkprofile);
		let name = json.name;
		let page = json.html_url;
		let myName = document.createElement('a');
		myName.className = 'text_name';
		myName.href = page;
		myName.innerHTML = name;
		linkProfile.append(myName);
		
		let bio = document.getElementById('bio');
		let info = json.bio;
		let myInfo = document.createElement('p');
		myInfo.className = 'text_bio';
		myInfo.innerHTML = info;
		bio.append(myInfo);

		let photo = document.getElementById('photo');
		let avatar = json.avatar_url;
		let myAvatar = document.createElement('img');
		myAvatar.className = 'link_avatar';
		myAvatar.src = avatar;
		photo.append(myAvatar);
	})
	.catch(err => alert("Информация о пользователе не доступна"));