class Video{
	constructor(title, uploader, time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}

	watch(){
		console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
	}
}

let video = new Video("Thank you for smoking","Titi","1h30");
video.watch()

let SecondMovie = new Video("Batman", "Gege", "50 min")
SecondMovie.watch()

