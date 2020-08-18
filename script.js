let preload = document.getElementById('preloader');
let main = document.getElementById('main');

setTimeout(() => {
	preload.classList.add('text');
	main.classList.remove('text');
	document.body.style.background = "white";
}, 4000);

let showTime = new Promise((resolve, reject) => {
	let timeNow = document.getElementById('time');
	let time = new Date();
	let day = time.getDate();
	let month = time.getMonth();
	let year = time.getFullYear();
	let fullDate = day + "." + month + "." + year;
	setTimeout(() => fullDate ? resolve(fullDate) : reject('Время неизвестно'), 2000);
	timeNow.append(fullDate);
});

const theName = 'tsidenova';
const url = 'https://api.github.com/users/';

let getUser = fetch(`${url}${theName}`);

Promise.all([getUser, showTime])
  .then(([infoFromPromise, dateFromPromise]) => {
    userInfo = infoFromPromise;
    nowDate = dateFromPromise;
  })
  .then(res => userInfo.json())
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
