interface PropsType {
    imageUrl: string
}

export const Welcome: React.FC<PropsType> = ({ imageUrl }) => {
    return (
        <>
            <h3>WELCOME INDIA</h3>
            <p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. </p>
            <img
                src={imageUrl || '../assets/template-images/courses/vidocto_image.png'}
                alt=""
                className="img-fluid image-cover"
            />
        </>
    )
}