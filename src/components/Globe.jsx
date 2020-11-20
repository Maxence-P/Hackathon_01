import React, { useState } from "react";
import ReactGlobe from "react-globe";
import './Globe.css';

function Globe() {
  const markers = [
    {
      id: "marker1",
      color: "red",
      coordinates: [37.971449, 23.724896],
      value: 175,
      name: "Parthenon",
      img: 'https://media.discordapp.net/attachments/777923556696260618/778992946133336084/The_Parthenon_in_Athens.jpg?width=915&height=643',
    },
    {
      id: "marker2",
      color: "red",
      coordinates: [41.867331, 12.493619],
      value: 175,
      name: "Colosseum",
      img: 'https://cdn.discordapp.com/attachments/777923556696260618/779002686636687420/Colosseum-Rome-Italy.png'
    },
    {
      id: "marker3",
      city: "Singapour",
      color: "red",
      coordinates: [43.947071, 4.535937],
      value: 175,
      name:"Gard's Bridge",
      img:"https://cdn.discordapp.com/attachments/777923556696260618/779011185458151424/9k.png",
    },
  ];
  const [cock, setCock] = useState([]);
  const [cardVisible, setCard] = useState(false);

  function markerTooltipRenderer() {
    return !cardVisible ? "Click for more information" : "";
  }

  function onClickMarker(marker) {
    setCock(marker)
    setCard(true);
  }

  function onDefocus(e) {
    setCard(false);
    setCock([]);
  }

  return (
    <div className="margin">
      {cardVisible && (
        <div
          onClick={onDefocus}
          role="treeitem"
          tabIndex="-1"
          onKeyDown={onDefocus}
          id="wrapperCard"
          style={{
            padding: 12,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className='cardWrapper'>
            <div className='cardLittleWrapper'>
                <h2>{cock.name}</h2>
                <img src={cock.img} alt='description'></img>
            </div>
          </div>
        </div>
      )}
      <div className="truc">
        <ReactGlobe
            markers={markers}
            options={{ markerTooltipRenderer }}
            onClickMarker={onClickMarker}
            onDefocus={onDefocus}
        />
      </div>
    </div>
  );
}

export default Globe;
