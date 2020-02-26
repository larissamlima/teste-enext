var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 112.786 112.786" alt="Play video">\
                    <path d="M106.52,30.578a56.929,56.929,0,0,0-16.667-19.55,2.331,2.331,0,1,0-2.757,3.76,52.6,52.6,0,0,1,15.289,17.92A51.739,51.739,0,1,1,56.393,4.637a2.246,2.246,0,0,0,2.256-2.256A2.356,2.356,0,0,0,56.393,0a56.393,56.393,0,1,0,56.393,56.393A55.7,55.7,0,0,0,106.52,30.578Z" fill="#fff"/>\
                  <g transform="translate(40.854 29.92)">\
                    <path d="M33.728,24.157A2.126,2.126,0,0,0,32.6,26.162V76.54a2.256,2.256,0,1,0,4.511,0V30.172L71.073,50.348,46.134,66.514a2.259,2.259,0,0,0,2.506,3.76L76.712,52.228a2.034,2.034,0,0,0,1-2.005,2.067,2.067,0,0,0-1.128-1.88l-40.6-24.186A2.393,2.393,0,0,0,33.728,24.157Z" transform="translate(-32.6 -23.875)" fill="#fff"/>\
</g>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton()