import { YoutubePlayer } from "./YoutubePlayer";

function Main(props) {
  return (

    <main styles={{ display: "flex", justifyContent: "space-around" }}>
      <img
        style={{ width: "100%", height: "auto" }}
        src="/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg"
        alt="Kingfisher"
      />
      <h2 style={{ margin: '2%' }} className="text-4xl">The Bird Enthusiasts Community Page</h2>

      <h2>Community Run, Community Owned!</h2>

      <h2 style={{ margin: '2%' }} className="text-2xl">Some bird humour videos!</h2>

      <div className="Video-player">{<YoutubePlayer />}</div>

      <p style={{ marginTop: '0' }}>
        Join our UK wide community of bird enthusiasts, discover the wonders of
        nature right at your door. People all over the UK contribute to our site
        advising of sightings, sending videos and providing care advice.
        Birdwatching is great to get outdoors and contributions to this site in
        the form of posts keep it going!
      </p>
      <img className="h-96 w-96 animate-bounce" src="/Goose.png" alt="Goose" />
    </main>
  );
}

export default Main;
