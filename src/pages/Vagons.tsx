import type { iVagon } from '../types';
import { vagonsQuery } from '../tanstackCaching';
import VagonCard from '../components/VagonCard';

export default function Vagons() {
    const vagons = vagonsQuery();

    if (vagons.isLoading) return <h2>Loading...</h2>
    if (vagons.isError) return <h2>Error loading vagons data</h2>

return (
<>
    <h1 style={{ marginTop: "10vh" }} >Vagons</h1>
    <div id="vagons-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        { vagons.data.Vagons.map((vagon: iVagon) => ( <VagonCard {...vagon} /> )) }
    </div>
</>
)
}