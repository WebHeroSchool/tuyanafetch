fetch('https://api.github.com/users/tsidenova')
	.then(res => res.json())
	.then(json => {
		let name = json.name;
		let myName = document.createElement('h2');
		myName.className = 'text_name';
		
		let page = json.html_url;
		/*let myPage = document.createElement('a');
		myPage.className = 'link_profile';
		myPage.href = page;*/
		
		myName.innerHTML = page;
		document.body.appendChild(myName);
		

		let avatar = json.avatar_url;
		let myAvatar = document.createElement('a');
		myAvatar.className = 'link_avatar';
		myAvatar.href = avatar;
		myAvatar.innerHTML = avatar;
		document.body.appendChild(myAvatar);


		

		let info = json.bio;
		let myInfo = document.createElement('p');
		myInfo.className = 'text_bio';
		myInfo.innerHTML = info;
		document.body.appendChild(myInfo);
	});