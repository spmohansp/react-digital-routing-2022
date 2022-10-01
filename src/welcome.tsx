export const Welcome = ({imageUrl})=>{
    return (
        <>
         <img
            src={imageUrl || '../assets/template-images/courses/vidocto_image.png'}
            alt=""
            className="img-fluid image-cover"
            />
        </>
    )
}