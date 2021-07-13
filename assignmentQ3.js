  //Q3
  // Write a class called Point, which represents a point in 2-D space.
  // A point has x and y co-ordinates, given as arguments to its constructor.
  // It also has a single method "plus", which takes another point co-ordinates
  // and returns the sum of the two points, that is,
  // a new point whose x is the sum of the x properties of the two original points,
  // and whose y is the sum of their y properties.
  class Point {
        constructor(x,y)
        {
            this.x=x;
            this.y=y;
        }    
        plus(x1,y1)
        {
            const final = {};
            final.X = this.x + x1;
            final.Y = this.y + y1;
            return final;
            
        }
  }
  let points = new Point(2,3);
  console.log(points.plus(3,2));
