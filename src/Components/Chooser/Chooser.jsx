import React, { useState } from "react";

const Chooser = () => {
    const arr = [
        {id: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png'}, 
        {id: 1, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/2048px-Blue_circle_for_diabetes.svg.png'}, 
        {id: 2, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Eo_circle_green_blank.svg/512px-Eo_circle_green_blank.svg.png'}, 
        {id: 3, url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/200px-Yellow_icon.svg.png'}, 
        {id: 4, url: 'https://img.icons8.com/emoji/452/purple-circle-emoji.png'}, 
        {id: 5, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/200px-Orange_circle_100%25.svg.png'}
    ];

    const defaultMinSec = 1 * 1000;
    const defaultMaxSec = 6 * 1000;

    const [arr1, setArr1] = useState([...arr]);
    const [arr2, setArr2] = useState([]);
    const [img, setImg] = useState('');
    const [minSec, setMinSec] = useState(defaultMinSec);
    const [maxSec, setMaxSec] = useState(defaultMaxSec);
    const getRandomTimer = () => Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec;
    // const [link, setLink] = useState('');

    const start = () => {
        if (!arr2.length) return;
        const setImage = () => {setImg(arr2[Math.floor(Math.random() * arr2.length)])};
        setInterval(() => setImage(), getRandomTimer());
    }

    // const addImg = () => {
    //     setArr1([...arr1, {id: arr1.length, url: link}]);
    //     setLink('');
    // }

    const ImagePreview = ({ width, height, url }) => {
        return (<div style={{
            width,
            height,
            backgroundImage: `url(${url})`,
            backgroundSize: '100%',
            cursor: 'pointer'
        }}></div>)
    }

    const GalleryContainer = ({children}) => {
        return <div style={{display: 'flex'}}>{children}</div>
    }

    return <>
        {/* <div>img urls<input type='text' value={link} onChange={e => setLink(e.target.value)} /><button onClick={addImg}>add</button></div> */}
        <div>min. sec<input type='number' min={defaultMinSec} step={10000} defaultValue={defaultMinSec} onChange={e => setMinSec(e.target.value)}/></div>
        <div>max. sec<input type='number' min={minSec} step={10000} defaultValue={defaultMaxSec} onChange={e => setMaxSec(e.target.value)}/></div>
        <GalleryContainer>
            {!arr1.length ? <span></span> : arr1.map(o => (<div key={o.id} onClick={() => {setArr1(arr1.filter(x => x.id !== o.id)); setArr2([...arr2, o])}}>
                <ImagePreview width='50px' height='50px' url={o.url} />    
            </div>))}
        </GalleryContainer>
        <GalleryContainer>
            {!arr2.length ? <span></span> : arr2.map(o => (<div key={o.id} onClick={() => {setArr2(arr2.filter(x => x.id !== o.id)); setArr1([...arr1, o])}}>
                <ImagePreview width='50px' height='50px' url={o.url} />    
            </div>))}
        </GalleryContainer>
        <div>
            {/* random: {img} */}
            <ImagePreview width='200px' height='200px' url={img.url} />
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
            <button onClick={start}>start</button>
        </div>
    </>
}

export default Chooser;