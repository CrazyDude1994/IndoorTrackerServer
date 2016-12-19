// first we need to create a stage
function init(width, height) {

    var PIXELS_PER_METER = 100;

    var points = [];

    var stage = new Konva.Stage({
      container: 'container',   // id of container <div>
        width: PIXELS_PER_METER * 5,
        height: PIXELS_PER_METER * 5
    });

    var layer = new Konva.Layer({
        draggable: true
    });

    // create our shape
    var room = new Konva.Rect({
        x: 0,
        y: 0,
        width: PIXELS_PER_METER * width,
        height: PIXELS_PER_METER * height,
        stroke: 'black',
        strokeWidth: 4
    });

    for(x=1;x<width;x++) {
        layer.add(new Konva.Line({
                      points: [0, x * PIXELS_PER_METER, width * PIXELS_PER_METER, x * PIXELS_PER_METER],
                      stroke: '#F0F0F0',
                      strokeWidth: 3,
                      lineCap: 'round',
                      lineJoin: 'round'
            }));
    }

    for(y=1;y<height;y++) {
        layer.add(new Konva.Line({
                      points: [y * PIXELS_PER_METER, 0, y * PIXELS_PER_METER, height * PIXELS_PER_METER],
                      stroke: '#F0F0F0',
                      strokeWidth: 3,
                      lineCap: 'round',
                      lineJoin: 'round'
            }));
    }

    // add the shape to the layer
    layer.add(room);

    // add the layer to the stage
    stage.add(layer);
        // then create layer
    var uiLayer = new Konva.Layer();

    var zoomIn = new Konva.Rect({
        x: 10,
        y: 10,
        width: 50,
        height: 50,
        fill: 'red'
    });

    var zoomOut = new Konva.Rect({
        x: 10,
        y: 79,
        width: 50,
        height: 50,
        fill: 'red'
    });

    zoomIn.on('click', function() {
        layer.scaleX(layer.scaleX() / 1.2);
        layer.scaleY(layer.scaleY() / 1.2);
        stage.draw();
    });

    zoomOut.on('click', function() {
        layer.scaleX(layer.scaleX() * 1.2);
        layer.scaleY(layer.scaleY() * 1.2);
        stage.draw();
    });

    uiLayer.add(zoomIn);
    uiLayer.add(zoomOut);

    stage.add(uiLayer);

    return function(x, y, name) {
        var found = false;
        for(i=0;i<points.length;i++) {
            if (name==points[i].name) {
                found = true;
                points[i].point.x(x * PIXELS_PER_METER);
                points[i].point.y(y * PIXELS_PER_METER);
                stage.draw();
                break;
            }
        }
        if (!found) {
            var circle = new Konva.Circle({
                x: x * PIXELS_PER_METER,
                y: y * PIXELS_PER_METER,
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