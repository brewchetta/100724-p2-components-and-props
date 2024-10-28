function Float({ image, description, alt }) { // destructuring props to get image, description, alt

    // const { image, description, alt } = props

    // console.log(props)

    return (
        <div>
            <img src={ image } alt={ alt } />
            <p>{ description }</p>
        </div>
    )

}


export default Float