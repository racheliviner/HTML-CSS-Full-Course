const videoData = [
    {
        thumbnail: "thumbnails/thumbnail-7.webp",
        videoTime: "22:15:57",
        profilePicture: "channel-pictures/channel-7.jpg",
        videoTitle: "JavaScript Tutorial Full Course - Beginner to Pro (2024)",
        videoAuthor: "SuperSimpleDev &#10003;",
        videoStats: "2.1M views &#183; 4 months ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-1.webp",
      videoTime: "14:20",
      profilePicture: "channel-pictures/channel-1.jpeg",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      videoAuthor: "Marques Brownlee &#10003;",
      videoStats: "3.4M views &#183; 6 months ago"
    },
    {
        thumbnail: "thumbnails/thumbnail-10.webp",
        videoTime: "25:21",
        profilePicture: "channel-pictures/channel-10.jpg",
        videoTitle: "היהודים באים | לקט ראש השנה - סיפורי בראשית",
        videoAuthor: "כאן 11 - תאגיד השידור הישראלי &#10003;",
        videoStats: "16K views &#183; 3 days ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-2.webp",
      videoTime: "8:22",
      profilePicture: "channel-pictures/channel-2.jpeg",
      videoTitle: "Try Not To Laugh Challenge #9",
      videoAuthor: "Markiplier",
      videoStats: "19M views &#183; 4 years ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-3.webp",
      videoTime: "9:13",
      profilePicture: "channel-pictures/channel-3.jpeg",
      videoTitle: "Crazy Tik Toks Taken Moments Before DISASTER",
      videoAuthor: "SSSniperWolf",
      videoStats: "12M views &#183; 1 year ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-4.webp",
      videoTime: "22:09",
      profilePicture: "channel-pictures/channel-4.jpeg",
      videoTitle: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
      videoAuthor: "Veritasium",
      videoStats: "18M views &#183; 4 months ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-5.webp",
      videoTime: "11:17",
      profilePicture: "channel-pictures/channel-5.jpeg",
      videoTitle: "Kadane's Algorithm to Maximum Sum Subarray Problem",
      videoAuthor: "CS Dojo",
      videoStats: "519K views &#183; 5 years ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-6.webp",
      videoTime: "19:59",
      profilePicture: "channel-pictures/channel-6.jpeg",
      videoTitle: "Anything You Can Fit In The Circle I’ll Pay For",
      videoAuthor: "MrBeast",
      videoStats: "141M views &#183; 1 year ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-8.webp",
      videoTime: "15:38",
      profilePicture: "channel-pictures/channel-8.jpg",
      videoTitle: "I Was Born And Living In The Sea All My Life",
      videoAuthor: "MSA previously My Story Animated &#10003;",
      videoStats: "2.9M views &#183; 2 days ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-9.webp",
      videoTime: "44:00",
      profilePicture: "channel-pictures/channel-9.jpg",
      videoTitle: "Top 10 Most-Viewed Kid Guests of ALL TIME on The Ellen Show",
      videoAuthor: "TheEllenShow &#10003;",
      videoStats: "1.9M views &#183; 1 year ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-11.webp",
      videoTime: "24:00",
      profilePicture: "channel-pictures/channel-11.jpg",
      videoTitle: "I Ate The World’s Rarest Foods",
      videoAuthor: "Nick DiGiovanni &#10003;",
      videoStats: "5.3M views &#183; 9 days ago"
    },
    {
      thumbnail: "thumbnails/thumbnail-12.webp",
      videoTime: "1:01:13",
      profilePicture: "channel-pictures/channel-12.jpg",
      videoTitle: "The BEST TIKTOK Song Covers on The Voice Kids 🤩",
      videoAuthor: "Best of The Voice Kids &#10003;",
      videoStats: "2.4M views &#183; 3 months ago"
    }
  ];  
  
  const videoGrid = document.getElementById("videoGrid");
  
  videoData.forEach(video => {
    const videoElement = `
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src="${video.thumbnail}">
          <div class="video-time">${video.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-pictures">
            <img class="profile-picture" src="${video.profilePicture}">
          </div>
          <div class="channel-info">
            <p class="video-title">${video.videoTitle}</p>
            <p class="video-author">${video.videoAuthor}</p>
            <p class="video-stats">${video.videoStats}</p>
          </div>
        </div>
      </div>
    `;
  
    videoGrid.innerHTML += videoElement;
  });
  