function Gallery(){

const images=[1,2,3,4,5,6,7,8];

return(

<section>

<div className="container">

<span className="section-tag">

Gallery

</span>

<h2>

Inside Ethiopian Coffee

</h2>

<div className="gallery">

{images.map(img=>(

<img

key={img}

src={`/images/gallery/${img}.jpg`}

alt="Coffee"

/>

))}

</div>

</div>

</section>

)

}

export default Gallery;