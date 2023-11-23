// import React, { Component } from 'react';

// class ZoomPan extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scale: 0.1,
//       translateX: 0,
//       translateY: 0,
//     };
//   }

//   handleZoomIn = () => {
//     this.setState((prevState) => ({ scale: prevState.scale + 0.1 }));
//   };

//   handleZoomOut = () => {
//     this.setState((prevState) => ({ scale: Math.max(0.1, prevState.scale - 0.1) }));
//   };

//   handlePan = (event) => {
//     this.setState({
//       translateX: event.nativeEvent.offsetX,
//       translateY: event.nativeEvent.offsetY,
//     });
//   };

//   render() {
//     const { scale, translateX, translateY } = this.state;

//     const containerStyle = {
//       transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
//     };

//     return (
//       <div className="zoom-pan-container">
//         <div className="zoom-pan-content" style={containerStyle} onMouseMove={this.handlePan}>
//           {/* Your content goes here */}
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//           <img src="https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png" onMouseMove={this.handlePan}alt="Zoomable and pannable image" />
//         </div>
//         <div className="controls">
//           <button onClick={this.handleZoomIn}>Zoom In</button>
//           <button onClick={this.handleZoomOut}>Zoom Out</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default ZoomPan;
