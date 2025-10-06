import "./VagonCard.css"
import type { iVagon } from "../types"
import { Link } from "react-router-dom"

export default function VagonCard({
    VagonNumber,
    CargoName,
    VagonType,
    DepartureStationName,
    DestinationCountryName,
}: iVagon) {
    return (
        <div className="vagon-card">
    <div className="vagon-row vagon-row-top">
        <span className="vagon-number">{VagonNumber}</span>
        <span className="vagon-type">{VagonType}</span>
    </div>
    <div className="vagon-row vagon-row-name">
        <span className="vagon-name">{CargoName}</span>
    </div>
    <div className="vagon-row vagon-row-route">
        <span className="vagon-departure">{DepartureStationName}</span>
        <span className="vagon-destination">{DestinationCountryName}</span>
    </div>
    <div className="vagon-row vagon-row-button">
        <Link to={`/vagons/${VagonNumber}`}> <button>Inspect</button> </Link>
    </div>
</div>
    );
}