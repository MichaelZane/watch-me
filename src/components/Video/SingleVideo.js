import React from 'react';



const SingleVideo = ({detail}) => {
   
    return (  
            <div>  
                {detail && (       
                    <div>             
                        <iframe 
                            title="selected Video"
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${detail.id}?autoplay=1`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen ></iframe>
                        
                        
                            <h5>{detail.title}</h5>
                            <p>{detail.description}</p>
                            
                    </div>
            )}
            </div>    
           
    );
}
export default SingleVideo;
 
 