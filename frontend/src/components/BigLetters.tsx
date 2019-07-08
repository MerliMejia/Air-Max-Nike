import React from "react"
import { Fab } from "@material-ui/core";

interface position {
    x: number,
    y: number
}

class BigLetters extends React.Component<{}, {
    movement1: position,
    movement2: position
}> {

    moveComponents = () => {

    }

    movingMouse = (ev: MouseEvent) => {
        this.setState({
            movement1: {
                x: ((40 + ev.movementX) * -1),
                y: ((40 + ev.movementY) * -1)
            },
            movement2: {
                x: (ev.movementX * 1) * .5,
                y: (ev.movementY * 1) * .5
            }
        })
    }

    constructor(props: any) {
        super(props);

        this.state = {
            movement1: {
                x: -40,
                y: -40
            },
            movement2: {
                x: 0,
                y: 0
            }
        }
    }

    render() {
        return <div className="bigLettersContainer">

            <div id="airLetters">
                <img style={{ transform: `translate(${this.state.movement1.x}px, ${this.state.movement1.y}px)` }} id="airLettersIMG" src={require("../images/AIR.svg")} alt="" />
            </div>

            <div id="airMaxLetters">
                <div className="row">
                    <div className="col-10 airmaxIMG">
                        <img style={{ transform: `translate(${this.state.movement1.x}px, ${this.state.movement1.y}px)` }} id="airMaxIMG" src={require("../images/AIRMAX.svg")} alt="" />
                    </div>
                    <div className="col-2 airmaxIMG">
                        <img style={{ transform: `translate(${this.state.movement1.x}px, ${this.state.movement1.y}px)` }} id="airmax" src={require("../images/270.svg")} alt="" />
                    </div>
                </div>
                <Fab id="seeDetails" variant="extended" aria-label="Delete">
                    See Details
                </Fab>
            </div>

            <div id="maxLetters">
                <img style={{ transform: `translate(${this.state.movement1.x}px, ${this.state.movement1.y}px)` }} src={require("../images/MAX.svg")} alt="" />
                
            </div>

            <img style={{ transform: `translate(${this.state.movement2.x}px, ${this.state.movement2.y}px)` }} id="nikers" src={require("../images/nikeL.png")} alt="" />

        </div>
    }

    componentDidMount() {
        document.onmousemove = this.movingMouse;
        document.onmouseout = (evt) => {
            this.setState({
                movement1: {
                    x: -40,
                    y: -40
                },
                movement2: {
                    x: 0,
                    y: 0
                }
            })
        }
    }

}

export default BigLetters