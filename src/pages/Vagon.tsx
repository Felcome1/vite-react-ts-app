import { useParams } from "react-router-dom";
import { vagonsQuery } from "../tanstackCaching";
import type { iVagon } from "../types";
import { uploadImage } from "../api";

export default function Vagon() {
    const { id } = useParams();
    const vagons = vagonsQuery();

    if (vagons.isLoading) return <h2>Loading...</h2>;
    if (vagons.isError) return <h2>Error loading vagon data</h2>;
    
    const vagon = vagons.data.Vagons.filter((vagon: iVagon) => vagon.VagonNumber === id)[0]
    return (
        <div>
            <h1 style={{ marginTop: "10vh" }}>Vagon {id}</h1>
            <ul style={{ width: "40vw" }} >
                {vagon && Object.entries(vagon).map(
                    ([key, value]) => ( 
                        <li key={key} className="vagon-list-item" style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span className="vagon-list-key" style={{ marginRight: "40px" }} > {key} </span>
                            <span className="vagon-list-value"> {String(value)} </span>
                        </li> 
                        )
                    )}
            </ul>
            <h4 style={{marginTop: "5vh"}}>Image</h4>
            <label 
            style={{ display: "inline-block", 
            marginBottom: "10px", 
            cursor: "pointer", 
            padding: "10px",
            paddingInline: "20px",
            borderRadius: "12px",
            border: "solid 1px #666",
            backgroundColor: "#333" }} >
                <input type='file' 
                    onChange={ (fileInput) => { 
                    const file = fileInput.target.files?.[0]; 
                    file && uploadImage(file, id) }} 
                    style={{display: "none"}}/>
                Upload photo
            </label>
            <br/>
            <img src={`/gallery/${id}.jpg`} alt={`Vagon ${id}`} className="vagon-page-image" />
        </div>
    )
}
