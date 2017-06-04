//@prepros-prepend vendor/in-view.min.js
//@prepros-prepend vendor/instafeed.min.js

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'itmepodcast',
	limit:'100',
	userID: '4571588',
	resolution: 'standard_resolution',
	accessToken: '4571588.ba4c844.de6a4f8199d34dbb9a19aa419053ed31',
	template: "<div class='video-wrapper'><video class='video' width='612' height='612' loop><source src='{{model.videos.standard_resolution.url}}'></video></div>",
	after: function() {

		function playVid(el) { 
		    el.play();
		}
		function pauseVid(el) { 
		    el.pause();
		}
		inView.offset(300);
		inView('video').on('enter', playVid).on('exit', pauseVid);

	}
});
feed.run();


/*
|----------------------------|
| PWA Service Worker         |
|----------------------------|
*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
