class Shape {
    constructor(color){
        this.color = color;
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    getArea(){
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    getArea(){
        return Math.PI * (this.radius ** 2);
    }

    print(){
        console.log(this);
    }
}

const circle1 = new Circle('Red', 2);

// circle1.print();
circle1.setColor('Blue');
// circle1.print();
// console.log(circle1.getArea());

class Square extends Shape {
    constructor(color, side){
        super(color);
        this.side = side;
    }

    getArea(){
        return this.side**2;
    }

    print(){
        console.log(this);
    }
}

const square1 = new Square('Red', 2);

// square1.print();
square1.setColor('Blue');
// square1.print();
// console.log(square1.getArea());

class Rectangle extends Shape {
    constructor(color, length, width){
        super(color);
        this.l = length;
        this.w = width;
    }

    getArea(){
        return this.l*this.w;
    }

    print(){
        console.log(this);
    }
}

const rect1 = new Rectangle('Red', 2, 5);

// rect1.print();
rect1.setColor('Blue');
// rect1.print();
// console.log(rect1.getArea());

class Paint {
    constructor(){
        this.shapes = []; 
    }

    addShape(shape){
        this.shapes.push(shape);
    }

    getShapes(){
        return this.shapes;
    }

    calculateTotalArea(){
        let total = 0;

        // this.shapes.map(shape => {
        //     total += shape.getArea();
        // })

        this.shapes.forEach(shape => {
            total += shape.getArea();
        })

        return total;
    }

    getCircles(){
        return this.shapes.filter(shape => shape instanceof Circle);
    }

    getSquares(){
        return this.shapes.filter(shape => shape instanceof Square);
    }

    getRectangles(){
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }

}

const paint1 = new Paint();
paint1.addShape(circle1);
paint1.addShape(square1);
paint1.addShape(rect1);

rect1.setColor('Cyan');

// console.log(paint1);
// console.log('Total Area:', paint1.calculateTotalArea());

console.log(paint1.getCircles());
// console.log('Total Area:', paint1.calculateTotalArea());