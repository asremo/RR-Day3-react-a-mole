import {useEffect} from 'react'
import mole from '../mole.png'

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randomSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
                style={{'width': '30vw'}}
                src={mole}
                onClick={props.handleClick}
            />
        </div>
    )
}

export default Mole