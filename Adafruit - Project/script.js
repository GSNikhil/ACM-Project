    document.getElementById('clear').onclick = function(){
        paper.project.activeLayer.removeChildren();
        paper.view.draw();
        x = [0];
        y = [0];
        var xhttp_x = new XMLHttpRequest();
        xhttp_x.open("PUT", "https://io.adafruit.com/api/v2/trailerror/feeds/acm/data/0E2FRFV5FQ88X25JMHTA0VKMZW", true);
        xhttp_x.setRequestHeader("Content-type", "application/json");
        xhttp_x.setRequestHeader("X-AIO-Key", "0a3bcf23ed364fc4b535ad162179f50f");
        let x_json = {
            "value" : JSON.stringify(x)
        }
        var myJsonString = JSON.stringify(x_json);
        xhttp_x.send(myJsonString);

        var xhttp_y = new XMLHttpRequest();
        xhttp_y.open("PUT", "https://io.adafruit.com/api/v2/trailerror/feeds/acm/data/0E2FRK0DV8S70TQ96C271T8KSD", true);
        xhttp_y.setRequestHeader("Content-type", "application/json");
        xhttp_y.setRequestHeader("X-AIO-Key", "0a3bcf23ed364fc4b535ad162179f50f");
        let y_json = {
            "value" : JSON.stringify(y)
        }
        var myJsonString = JSON.stringify(y_json);
        xhttp_y.send(myJsonString);
    }

    paper.install(window);
    window.onload = function() {
        paper.setup('myCanvas');
        // Create a simple drawing tool:
        var tool = new Tool();
        var path;
        // path.strokeColor = new Color(255, 255, 255);

        // Define a mousedown and mousedrag handler
        tool.onMouseDown = function(event) {
            path = new Path();
            path.strokeColor = 'black';
            path.add(event.point);
            
            // console.log(path._segments);
           
        }

        tool.onMouseUp = function(){
            let segments = path._segments;
            
            x = []
            y = []
            segments.forEach(segment => {
                console.log(segment._point._x, segment._point._y);
                x.push(segment._point._x)
                y.push(segment._point._y)
            });

            //Sending to database

            //x
            var xhttp_x = new XMLHttpRequest();
            xhttp_x.open("PUT", "https://io.adafruit.com/api/v2/trailerror/feeds/acm/data/0E2FRFV5FQ88X25JMHTA0VKMZW", true);
            xhttp_x.setRequestHeader("Content-type", "application/json");
            xhttp_x.setRequestHeader("X-AIO-Key", "0a3bcf23ed364fc4b535ad162179f50f");
            let x_json = {
                "value" : JSON.stringify(x)
            }
            var myJsonString = JSON.stringify(x_json);
            xhttp_x.send(myJsonString);

            var xhttp_y = new XMLHttpRequest();
            xhttp_y.open("PUT", "https://io.adafruit.com/api/v2/trailerror/feeds/acm/data/0E2FRK0DV8S70TQ96C271T8KSD", true);
            xhttp_y.setRequestHeader("Content-type", "application/json");
            xhttp_y.setRequestHeader("X-AIO-Key", "0a3bcf23ed364fc4b535ad162179f50f");
            let y_json = {
                "value" : JSON.stringify(y)
            }
            var myJsonString = JSON.stringify(y_json);
            xhttp_y.send(myJsonString);

            
        }

        tool.onMouseDrag = function(event) {
            path.add(event.point);
        }
    }

    