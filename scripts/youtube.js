let videosHTML = '';
videos.forEach((video) => {
    const html = `
    <div class="video-preview">
      <div>
          <img class="thumbnail" src="${video.image}" alt="" />
          <p class="time-stamp">${video.duration}</p>
      </div>
      <div class="video-info-grid">
          <img class="channel-profile" src="${video.channel}" alt="" />
          <div class="video-info">
              <p class="video-title">
                  ${video.title}
              </p>
              <p class="video-author">${video.author}</p>
              <p class="video-stats">${video.views} views &middot; ${video.time} ago</p>
          </div>
      </div>
    </div>
  `;

    videosHTML += html;
});

document.querySelector(".js-videos").innerHTML = videosHTML;