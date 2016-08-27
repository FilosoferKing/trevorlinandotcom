import React, { Component } from 'react';

export default class VideoBackground extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <video className={this.props.styling} style={{'WebkitFilter':'brightness(' + this.props.lightingSlider + '%)', 'filter':'brightness(' + this.props.lightingSlider + '%)'}}
                   autoPlay loop
                   src="../../../public/videos/sunsetlapsecompressed.mp4" type="video/mp4">
            </video>
        );
    }

}
