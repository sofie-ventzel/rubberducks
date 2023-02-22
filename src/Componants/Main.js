import { YoutubePlayer } from "./YoutubePlayer";

function Main(props) {


  return (
    <main>
      <img style={{ width: '100%', height: 'auto' }} src="/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg" alt="Yellow duck" />
      <h2 style={{ margin: '5% 0' }}>The Bird Enthusiasts Community Page</h2>
      <h2>{props.brand}</h2>

      <h2>Some bird humour videos!</h2>

      <div className="Video-player">{<YoutubePlayer />}</div>

      <p>
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
