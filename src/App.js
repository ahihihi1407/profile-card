/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Wave from "./images/bg-pattern-card.svg";
import topCircle from "./images/bg-pattern-top.svg";
import bottomCircle from "./images/bg-pattern-bottom.svg";
import avatar from './images/image-victor.jpg';


function App() {
  return (
    <div className="App">
      <img className="top-circle" src={topCircle} />
      <img className="bottom-circle" src={bottomCircle} />
      <div className="card-container">
        <img className="top-img" src={Wave} alt="image-waves" />
        <div className="info">
          <img src={avatar} className="avatar" alt="avatar" />
          <h2>Victor Crest <span> 26 </span></h2>
          <h3>London</h3>
        </div>
        <div className="social">
          <div className="follower">
            <h1>80K</h1>
            <h3>Followers</h3>
          </div>

          <div className="like">
            <h1>803K</h1>
            <h3>Likes</h3>
          </div>

          <div className="photo">
            <h1>1.4K</h1>
            <h3>Photos</h3>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
