import React, { useEffect, useState } from "react";

const Videos = ({ searchValue }) => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [ytVideo, setYtVideo] = useState([]);
  const fetchVideo = async (query) => {
    const search = query;
    const URL = "https://youtube-search-and-download.p.rapidapi.com";
    const options = {
      method: "GET",
      url: "https://youtube-search-and-download.p.rapidapi.com/video/related",
      headers: {
        "X-RapidAPI-Key": "e69a93d0f5msh53483a351c7cce5p1cdf7ajsn85613c7de568",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `${URL}/search?query=${search} exercise`,
      options
    );
    const data = await response.json();
    setYtVideo(data.contents);
    console.log(data);
  };
  useEffect(() => {
    if (isInitialRender) {
      // Fetch videos on the initial render
      fetchVideo("push up");
      setIsInitialRender(false);
    } else {
      // Fetch videos when searchValue changes
      fetchVideo(searchValue);
    }
  }, [searchValue, isInitialRender]);

  return (
    <div className="mt-3 container video">
      <h2 className="video-head">Similar Videos</h2>
      <div className="video-container">
        {Array.from(ytVideo)
          .slice(0, 6)
          .map((videoElement, index) => {
            const videoUrl = `https://www.youtube.com/watch?v=${videoElement.video?.videoId}`;
            return (
              <div className="video-data" key={index}>
                <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={videoElement.video?.thumbnails[0]?.url}
                    className="thumbnail"
                    alt="Thumbnail"
                  />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Videos;
