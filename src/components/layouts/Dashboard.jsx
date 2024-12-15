import React from "react";
import "../layouts/Dashboard.css"
import image1 from "../../assets/int1.jpeg";
import image2 from "../../assets/int2.jpeg";
import image3 from "../../assets/int3.jpeg";
import image4 from "../../assets/bed1.jpg";
import image5 from "../../assets/bed2.jpg";
import image6 from "../../assets/bed3.jpg";
import image7 from "../../assets/kit1.jpg";
import image8 from "../../assets/liv1.jpg";
import image9 from "../../assets/liv2.jpg";
import image10 from "../../assets/kit2.jpg";


function Dashboard() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-image">
            <img src={image7} alt="Kitchen Design" />
          </div>
          <div class="card-content">
            <h3>Kitchen Design</h3>
            <p>A modern kitchen with sleek and stylish finishes.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={image4} alt="Bedroom Design" />
          </div>
          <div class="card-content">
            <h3>Bedroom Design</h3>
            <p>A cozy bedroom with a contemporary layout and warm tones.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={image8} alt="Living Room Design" />
          </div>
          <div class="card-content">
            <h3>Living Room Design</h3>
            <p>An elegant living room with minimalist decor.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={image10} alt="Living Room Design" />
          </div>
          <div class="card-content">
            <h3>Kitchen Design</h3>
            <p>A modern kitchen with sleek and stylish finishes.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={image5} alt="Living Room Design" />
          </div>
          <div class="card-content">
            <h3>Bedroom Design</h3>
            <p>A cozy bedroom with a contemporary layout and warm tones.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src={image9} alt="Living Room Design" />
          </div>
          <div class="card-content">
            <h3>Living Room Design</h3>
            <p>An elegant living room with minimalist decor.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
