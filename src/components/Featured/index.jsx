import React from "react";
import "./styles.scss";

export default function Featured() {
 const photos = [{
  img: 'https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587496500783-6H7VSH76T59IAJWW3DNT/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookAkihabara+Anime+City+SEGA.jpg?format=750w'
 }, 
 {
  img: 'https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587492888836-CI2ANTQFCLO653WKRSKF/Liam_Wong_Tokyo_Nights_Wallpaper_TO_KY_OOArtboard+4.jpg?format=750w'
 }, ]
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={photos[0].img}/>
      </div>
      <div className='featured-column-layout'>
        <h6>lily</h6>
        <img src={photos[1].img}/>
      </div>
    </section>
  );
}