import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karolis Čibiras </span>
            from <span className="purple"> Kaunas, Lithuania.</span>
            <br />
            In a world painted with art 🎨 and echoes of history 🏛, I embark on a journey fueled by mythology 🐉, music 🎵, and the natural world 🌿. From serene walks 🚶‍♂️ to thrilling travels ✈️, I weave a tapestry of adventures. Ancient trees 🌳 whisper their stories, and ruins reveal humanity’s pursuit of knowledge and beauty. Music 🎶 binds me across time and space. Life’s simple pleasures—a good book 📚 or a well-crafted film 🎬—bring profound joy. My love story is a mosaic, each moment painting the essence of beauty and understanding. 🌈✨ May my journey inspire exploration and curiosity. 🌟🚶‍♂️📚🎶🌍
            <br />
            </p>
  

          <footer className="blockquote-footer">Karolis Čibiras</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
