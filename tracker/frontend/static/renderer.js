// first we need to create a stage
function init(width, height) {

    var points = [];

    var stage = new Konva.Stage({
      container: 'container',   // id of container <div>
        width: 100 * width,
        height: 100 * height
    });

    // then create layer
    var layer = new Konva.Layer();

    // create our shape
    var room = new Konva.Rect({
        x: 0,
        y: 0,
        width: 100 * width,
        height: 100 * height,
        stroke: 'black',
        strokeWidth: 4
    });

    // add the shape to the layer
    layer.add(room);

    // add the layer to the stage
    stage.add(layer);

    return function(x, y, name) {
        var found = false;
        for(i=0;i<points.length;i++) {
            if (name==points[i].name) {
                found = true;
                points[i].point.x(x * 100);
                points[i].point.y(y * 100);
                layer.draw();
                break;
            }
        }
        if (!found) {
            var circle = new Konva.Circle({
                x: x * 100,
                y: y * 100,
                radius: 20,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            });
            points.push({x: x, y: y, name: name, point: circle});
            layer.add(circle);
            stage.add(layer);
        }
    };
}