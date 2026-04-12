export default function RestCard({restInfo}){

    return (
        <img classNa="w-70 h-45 object-cover gap-7" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
    )


}