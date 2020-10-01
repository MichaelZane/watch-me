import React, { useEffect, useState } from "react";
import {  Col, ListGroup } from "react-bootstrap";
import SingleVideo from "./SingleVideo";
import Youtube from "simple-youtube-api"
import config from "../../config"
import Suggestions from "./Suggestions";

const youtube = new Youtube(config.apiKey)

export default ({search}) => {
    
    const [videoList, setVideoList] = useState([])
    const [selectedVideo, setSelectedVideo] = useState({})
    const [error, setError] = useState(false)


useEffect(() => { 

    const callApi = async () => {
        
        const result = await youtube.searchVideos(search, 6)


        if (result.length === 0) {
            setError(true)
        } else {
            setError(false)
        }

        setSelectedVideo(result[0])
        setVideoList(result)
        }
        callApi()
    }, [search, setSelectedVideo])

        const selectedVideoCallback = videoDetail => {
            setSelectedVideo(videoDetail)
        }

        const randomSelector = () => {
            const currentSelected = selectedVideo;
            console.log(currentSelected);
            console.log(videoList);
            let found = false;
            while (!found) {
              let newRandom = videoList[getRandomInt(videoList.length)];
              if (newRandom.id !== currentSelected.id) {
                setSelectedVideo(newRandom);
                found = true;
              }
            }
          };
        
          const PlayRandom = () => {
            return (
              <div style={{ textAlign: "center" }}>
                
                <img
                  className="random"
                  src={require("./randomplay-btn.png")}
                  height="60px"
                  alt="button here"
                  style={{ cursor: "pointer", marginLeft: "auto" }}
                  onClick={randomSelector}
                />
              </div>
            );
          };

  return (
    <React.Fragment>
       
      <Col xs={12} lg={8} >
        
          {error ? (
          <h1>No result found, try another search </h1> 
         ) : (
            <SingleVideo detail={selectedVideo} />
          )}
     
      </Col>
      <Col xs={12} lg={4} >
          {!error && (
              <ListGroup>
                  <PlayRandom />
              <p>Suggestions</p>
              <Suggestions 
                videoList={videoList} 
                changeSelection={selectedVideoCallback}
                selectedVideoId={selectedVideo.id} 
                />
            
          </ListGroup>
          )}

      </Col>
    </React.Fragment>
  );
};
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }