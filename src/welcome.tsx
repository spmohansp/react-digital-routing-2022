export const Welcome = ({imageUrl})=>{
    return (
        <>
        <h3>WELCOME INDIA</h4>
         <img
            src={imageUrl || '../assets/template-images/courses/vidocto_image.png'}
            alt=""
            className="img-fluid image-cover"
            />
        </>
    )
}