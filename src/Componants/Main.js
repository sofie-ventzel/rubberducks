import { YoutubePlayer } from "./YoutubePlayer";

function Main() {
  const styles = {
    image: {
      width: "10%",
      height: "auto",
    },
    div: {
      display: "flex",
      flexDirection: "row",
    },
  };

  return (
    <main>
      <img src="/HomeImage.jpg" alt="Photo of 2 keen birdwatchers" />

      <p>
        Join our UK wide community of bird enthusiasts, discover the wonders of
        nature right at your door. People all over the UK contribute to our site
        advising of sightings, sending videos and providing care advice.
        Birdwatching is great to get outdoors and contributions to this site in
        the form of posts keep it going!
      </p>
      <div style={styles.div}>
        <img style={styles.image} src="/UntitledTwo.png" alt="Yellow duck" />
        <img style={styles.image} src="/UntitledTwo.png" alt="Yellow duck" />
        <img style={styles.image} src="/UntitledTwo.png" alt="Yellow duck" />
      </div>
      <h2>Getting our ducks in a row!</h2>
      <div style={styles.div}>
        <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
        <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
        <img style={styles.image} src="/Untitled.png" alt="Yellow duck" />
      </div>
      <YoutubePlayer />
    </main>
  );
}

export default Main;
