from PIL import Image
from pathlib import Path

source = Path("public/kaushik-logo.png")
if not source.exists():
    source = Path("public/images/Pasted 09-11-2026 at 16.33.37.png")

if not source.exists():
    raise SystemExit("Logo image not found. Check public/images.")

img = Image.open(source).convert("RGB")
pixels = img.load()
points = []

for y in range(img.height):
    for x in range(img.width):
        r, g, b = pixels[x, y]
        brightness = max(r, g, b)
        blue_logo = b > 105 and b > r * 1.25 and b > g * 1.05
        bright_logo = brightness > 145 and (max(r, g, b) - min(r, g, b) < 100)

        if blue_logo or bright_logo:
            points.append((x, y))

if not points:
    raise SystemExit("Could not detect logo artwork in image.")

left = min(x for x, y in points)
top = min(y for x, y in points)
right = max(x for x, y in points) + 1
bottom = max(y for x, y in points) + 1

pad_x = int((right - left) * 0.12)
pad_y = int((bottom - top) * 0.18)

box = (
    max(0, left - pad_x),
    max(0, top - pad_y),
    min(img.width, right + pad_x),
    min(img.height, bottom + pad_y)
)

cropped = img.crop(box)
cropped.save("public/kaushik-logo-cropped.png", optimize=True)

print("Original image:", img.size)
print("Cropped logo:", cropped.size)
print("Saved: public/kaushik-logo-cropped.png")
