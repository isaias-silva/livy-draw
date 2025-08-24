# Livy-draw

<img src="./logo.png" width="200px"></img>

<p>A ts library for drawing with x and y coordinates.<p>

## usage:
### draw with coordinates.
  
after defining the ImageWindow instance, we can create an image (`createImage(path)`) where we draw with the ``draw(x,y,color)`` method, we can define the coordinates and color (hexadecimal) of the points


```typescript


new ImageWindow(100,100)
.createImage(path.resolve("images","the-line.png"))
.draw(1,2,"#000")
.draw(1,3,"#000")
.draw(1,4,"#000")
.save()

```

### draw with coordinates array:
we can also draw with an array of Coordinate objects.

```typescript
const coordinates=[]
for(let point=0; point<100; point++){
    coordinates.push(new Coordinates<string>("#000",1,point));
}
new ImageWindow(100,100)
.drawComplete(coordinates);

```

### get pixels coordinates of image:

Is possible extract the position and content(color) of pixels of an image with the util function `extractPixelsCoordinatesInImage`. is returned a array of objects `Coordinate<string>` with x, y and content(color in hexadecimal).

```typescript

const coordinates = await extractPixelsCoordinatesInImage(path.resolve("images","gojira.png"),"#fff");

new ImageWindow(100,100)
.drawComplete(coordinates);

```
> you can ignore the color of a pixel in `extractPixelsCoordinatesInImage` with the second parameter (hexIgnore)