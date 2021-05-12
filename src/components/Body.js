import React, {useState, useEffect} from 'react'
import pic from './wb.png'
import UseAPI from './src/useAPI'
function Body() {
  return (
    <div className="Body">
        <div className="body2" style={{padding: 10, backgroundColor: '#282c34'}}>
            <div style={{ padding: 10, backgroundImage: `url(${pic})` }}>
                <h1> Heading </h1>
                <p> Description</p>
            </div>
        </div>
        <div className="imgleft">
            <img src={'./logo512.png'} className="img"></img>
            <div>
                <h1> Heading</h1>
                <p> Description</p>
            </div>
        </div>
        <div className="imgleft">
            <img src={'./logo512.png'} className="img"></img>
            <div>
                <h1> Image</h1>
                <p> Description of</p>
            </div>
        </div>
        <div className='imgsrow'>
            <h1>Examples of Images</h1>
            <div>
                <img src={'./logo512.png'} className="img"></img>
                <img src={'./logo512.png'} className="img"></img>
                <img src={'./logo512.png'} className="img"></img>
            </div>
        </div>
        <div className="useapi">
            <UseAPI />
        </div>
    </div>
  );
}

export default Body;
