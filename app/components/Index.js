import React from "react";
import ReactGridLayout from "react-grid-layout";
const ResponsiveReactGridLayout = ReactGridLayout.Responsive;

export default class Index extends React.Component{

    constructor(props) {
      super(props);
      this.cardStyles = {
        border: "1px solid #000",
        height: "100%"
      };
      this.layouts = {
        lg: [{ x: 0, y: 0, w: 3, h: 1, i: 0 }, { x: 3, y: 0, w: 3, h: 1, i: 1 }, { x: 6, y: 0, w: 3, h: 1, i: 2 }, { x: 9, y: 0, w: 3, h: 1, i: 3 }],
        md: [{ x: 0, y: 0, w: 3, h: 1, i: 0}, { x: 3, y: 0, w: 3, h: 1, i: 1}, { x: 0, y: 1, w: 3, h: 1, i: 2 }, { x: 3, y: 1, w: 3, h: 1, i: 3 }],
        sm: [{ x: 0, y: 0, w: 3, h: 1, i: 0}, { x: 0, y: 1, w: 3, h: 1, i: 1}, { x: 0, y: 2, w: 3, h: 1, i: 2 }, { x: 0, y: 3, w: 3, h: 1, i: 4 }]
      };
    }

    generateLayout() {
      return this.layouts;
    }

    render() {

        const layouts = this.generateLayout();

        return (
          <ResponsiveReactGridLayout {...this.props} layouts={layouts}>
            <div key={1}><h3 style={this.cardStyles}>Card 1</h3></div>
            <div key={2}><h3 style={this.cardStyles}>Card 2</h3></div>
            <div key={3}><h3 style={this.cardStyles}>Card 3</h3></div>
            <div key={4}><h3 style={this.cardStyles}>Card 4</h3></div>
          </ResponsiveReactGridLayout>
        );
    }
}

Index.defaultProps = {
    className: "layout",
    isDraggable: false,
    offsetX: 0,
    offsetY: 0,
    width: 1200,
    breakpoints : {lg:1200, md:768, sm:480},
    cols: {lg: 12, md: 6, sm: 3}
}