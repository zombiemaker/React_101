import React from 'react';


function Images(props){
	console.log(props)
	// Map through images
	let atlImages = props.imageGallery.map((image,i)=>{
		return(
			<img src={image} key={i}/>
		)
	})
	return(
		<div classNAme="images">
			{atlImages}
		</div>
	)
}
export default Images;