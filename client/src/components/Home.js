import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData("videos");
        console.log("API Response:", response); // Debugging

        if (response?.success && response?.data?.videos?.length > 0) {
          setVideos(response.data.videos);
        } else {
          throw new Error("No videos found");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    console.log("Updated Videos State:", videos); // Debugging
  }, [videos]); // Logs after state update

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {videos.length > 0 ? (
        videos.map((video) => (
          <div key={video._id} className="card">
            <h3>{video.title}</h3>
            <img src={video.thumbnail} alt={video.title} width="200" />
            <p>{video.description}</p>
            <p>Duration: {video.duration} sec</p>
            <p>Views: {video.views}</p>
            <p>Uploaded by: {video.owner?.email || "Unknown"}</p>
            <video width="320" height="240" controls>
              <source src={video.videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <div>No videos available</div>
      )}
    </div>
  );
}

export default Home;
