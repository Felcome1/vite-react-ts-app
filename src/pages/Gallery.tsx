import files from '../images.json';


export default function Gallery() {
    const filenames: string[] = files.files
    return <>
    <h1>Gallery</h1>
    {
        filenames.map((filename) => (
            <span className="gallery-image-container">
                <img src={`../gallery/${filename}`} alt={`Vagon ${filename.replace(".jpg", "")}`} className="gallery-image" />
                <span className="gallery-image-label"> {filename} </span>
            </span>
        ))
    }
    </>
}