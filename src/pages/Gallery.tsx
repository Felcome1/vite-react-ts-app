import files from '../images.json';
import { vagonsQuery } from '../tanstackCaching';
import type { iVagon } from '../types';
import { Link } from 'react-router-dom';


export default function Gallery() {
    // const filenames: string[] = files.files
    const vagons = vagonsQuery();

    if (vagons.isLoading) return <h2>Loading...</h2>
    if (vagons.isError) return <h2>Error loading vagons data</h2>
    
    return <>
    <h1 style={{ marginTop: "10vh" }}>Gallery</h1>
    {
        /*filenames.map((filename) => (
            <span className="gallery-image-container">
                <img src={`../gallery/${filename}`} alt={`Vagon ${filename.replace(".jpg", "")}`} className="gallery-image" />
                <span className="gallery-image-label"> {filename} </span>
            </span>
        ))*/
       <span className="gallery-image-container" style={{
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap", 
            alignItems: "center", 
            margin: "40px", 
            width: "60vw",
            justifyContent: "space-around"
            }}>
        {vagons.data.Vagons.map((vagon: iVagon) => (<Link to={`/vagons/${vagon.VagonNumber}`}><span style={{ display: "flex", flexDirection: "column", cursor: "pointer", border: "solid 1px #666", backgroundColor: "#333", margin: "10px", textAlign: "center", height: "160px" }} key={vagon.VagonNumber} >
                <img src={`../gallery/${vagon.VagonNumber}.jpg`} alt={`Vagon ${vagon.VagonNumber}`} className="gallery-image"
                style={{width: "120px", height: "100px", padding: "10px"}} />
                <span className="gallery-image-label"> {vagon.VagonNumber} </span>
                </span></Link>
        ))}
        </span>

    }
    </>
}