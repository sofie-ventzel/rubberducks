// findings will present a map and some posts - images or videos of any sightings shared relating to that type of bird
import BlogsandMedia from "../Componants/BlogsandMedia";
import Footer from "../Componants/Footer";
import MapPlotting from "../Componants/MapPlotting";



function Findings(props) {
    console.log("search test", props.state)
    return (
        <>
            <MapPlotting />
            <BlogsandMedia />
            <Footer />
        </>
    )
}

export default Findings;