import React from "react"
import memedata from "../memeData"

/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
export default function Meme(){
    const [meme, setMeme] =  React.useState({
        topText: " ",
        bottomText: " ",
        randomImage: " http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImage] = React.useState(memedata)

    function getRandomMeme()
    {
        const meme = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        const randomURL = meme[randomNumber].url

        setMeme((prevMeme)=> ({
            ...prevMeme,
            randomImage: randomURL
        }))

    }

    return(
        <main>
        <div className="meme-form">
        <input
            className="form-text"
            type="text"
            placeholder="Top Text">
            
            </input>
        <input
            className="form-text "
            type="text"
            placeholder="Top bottom">
            
         </input>
        <button className="form-button" onClick={getRandomMeme}>Get a new meme image 🖼 </button>
        <img src={meme.randomImage} alt="meme" className="meme-image"></img>
        </div>

        </main>


    )

}