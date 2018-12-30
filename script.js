    document.getElementById('clear').onclick = function(){
        paper.project.activeLayer.removeChildren();
        paper.view.draw();
        x = [0]
        y = [0]
        const fb = firebase.database().ref()
            fb.child("x").set(x);
            fb.child('y').set(y);
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
            const fb = firebase.database().ref()
            fb.child("x").set(x);
            fb.child('y').set(y)
        }

        tool.onMouseDrag = function(event) {
            path.add(event.point);
        }
    }

    