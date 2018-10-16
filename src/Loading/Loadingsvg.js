import React, {Component} from 'react';
import '../Assets/Css/Loading.css';
import firebaseApp from "../config/firebase";

class Loadingsvg extends Component {
    render(){
        return (
            <div id="Loadingsvg" className="loading">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <circle cx="16" cy="3" r="2.98966">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(45 16 16)" cx="16" cy="3" r="2.35306">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(90 16 16)" cx="16" cy="3" r="1.02615">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0.372702">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(315 16 16)" cx="16" cy="3" r="1.44094">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                    <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
                        <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate>
                    </circle>
                </svg>
            </div>
        );
    }
}

export default Loadingsvg