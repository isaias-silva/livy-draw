# Livy-draw

<img src="https://i.ibb.co/20CnfHwJ/Copilot-20250824-172115.png" alt="logo-livy" width="240px">

A TypeScript library for drawing using x and y coordinates.

## 🚀 Features

- ✨ Simple drawing with x, y coordinates
- 🎨 Hexadecimal color support
- 📊 Batch drawing with coordinate arrays
- 🖼️ Extract pixel coordinates from existing images
- 📦 TypeScript and JavaScript compatible
- ⚡ Support for both Bun and npm

## 📦 Installation

### Bun
```bash
bun add @isaias-silva/livy-draw
```

### npm
```bash
npm install @isaias-silva/livy-draw
```

## 📖 Usage

### Import
```typescript
import { ImageWindow, Coordinates, extractPixelsCoordinatesInImage } from '@isaias-silva/livy-draw';
import path from 'path';
```

### 🎯 Basic Drawing with Coordinates

After defining an `ImageWindow` instance, you can create an image using `createImage(path)` and draw individual points with the `draw(x, y, color)` method:

```typescript
// Creating a vertical line
const canvas = new ImageWindow(100, 100);

canvas
  .createImage(path.resolve("images", "vertical-line.png"))
  .draw(50, 10, "#ff0000")  // Red point
  .draw(50, 11, "#ff0000")  // Red point
  .draw(50, 12, "#ff0000")  // Red point
  .draw(50, 13, "#ff0000")  // Red point
  .save();
```

### 📊 Drawing with Coordinate Arrays

You can also draw using an array of `Coordinate` objects for batch operations:

```typescript
// Creating a diagonal line
const coordinates = [];
for (let point = 0; point < 50; point++) {
  coordinates.push(new Coordinates<string>("#00ff00", point, point));
}

const canvas = new ImageWindow(100, 100);
canvas
  .createImage(path.resolve("images", "diagonal-line.png"))
  .drawComplete(coordinates)
  .save();
```

### 🖼️ Extracting Coordinates from Images

You can extract the position and content (color) of pixels from an existing image using the `extractPixelsCoordinatesInImage` utility function:

```typescript
// Extracting coordinates from an existing image
const coordinates = await extractPixelsCoordinatesInImage(
  path.resolve("images", "source-image.png"),
  "#ffffff"  // Color to ignore (optional)
);

// Redrawing in a new image
const canvas = new ImageWindow(200, 200);
canvas
  .createImage(path.resolve("images", "copied-image.png"))
  .drawComplete(coordinates)
  .save();
```

> 💡 **Tip:** You can ignore pixels of a specific color using the second parameter (`hexIgnore`) in the `extractPixelsCoordinatesInImage` function

## 🎨 Advanced Examples

### Creating Geometric Patterns
```typescript
// Creating a square
const square = [];
const size = 20;

// Horizontal borders
for (let x = 0; x < size; x++) {
  square.push(new Coordinates<string>("#0000ff", x, 0));        // Top
  square.push(new Coordinates<string>("#0000ff", x, size - 1)); // Bottom
}

// Vertical borders
for (let y = 0; y < size; y++) {
  square.push(new Coordinates<string>("#0000ff", 0, y));        // Left
  square.push(new Coordinates<string>("#0000ff", size - 1, y)); // Right
}

const canvas = new ImageWindow(100, 100);
canvas
  .createImage(path.resolve("images", "square.png"))
  .drawComplete(square)
  .save();
```

### Processing Multiple Images
```typescript
const processImages = async () => {
  const sourceImages = ["image1.png", "image2.png", "image3.png"];
  
  for (const imageName of sourceImages) {
    const coordinates = await extractPixelsCoordinatesInImage(
      path.resolve("source", imageName),
      "#ffffff"
    );
    
    const canvas = new ImageWindow(300, 300);
    canvas
      .createImage(path.resolve("processed", `processed-${imageName}`))
      .drawComplete(coordinates)
      .save();
  }
};

processImages();
```

## 📚 API Reference

### `ImageWindow`
- **Constructor:** `new ImageWindow(width: number, height: number)`
- **Methods:**
  - `createImage(path: string): ImageWindow`
  - `draw(x: number, y: number, color: string): ImageWindow`
  - `drawComplete(coordinates: Coordinates<string>[]): ImageWindow`
  - `save(): void`

### `Coordinates<T>`
- **Constructor:** `new Coordinates<T>(content: T, x: number, y: number)`

### `extractPixelsCoordinatesInImage`
- **Signature:** `extractPixelsCoordinatesInImage(imagePath: string, hexIgnore?: string): Promise<Coordinates<string>[]>`

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.


**Made with [@isaias-silva](https://github.com/isaias-silva)**