from PIL import Image
import os

def create_icons():
    # Create the scripts and public/icons directories if they don't exist
    os.makedirs('public/icons', exist_ok=True)
    
    # Load the source image
    source_img = Image.open('images/Capture-One-Catalog0815.jpg')
    
    # Convert to RGBA if needed
    if source_img.mode != 'RGBA':
        source_img = source_img.convert('RGBA')
    
    # Calculate the square crop dimensions
    width, height = source_img.size
    size = min(width, height)
    left = (width - size) // 2
    top = (height - size) // 2
    right = left + size
    bottom = top + size
    
    # Crop to square
    square_img = source_img.crop((left, top, right, bottom))
    
    # Create different sizes
    sizes = {
        'favicon-16x16.png': (16, 16),
        'favicon-32x32.png': (32, 32),
        'apple-touch-icon.png': (180, 180),
        'android-chrome-192x192.png': (192, 192),
        'android-chrome-512x512.png': (512, 512)
    }
    
    # Generate each size
    for filename, size in sizes.items():
        resized = square_img.resize(size, Image.ANTIALIAS)
        resized.save(f'public/icons/{filename}')
    
    # Create ICO file
    favicon_16 = square_img.resize((16, 16), Image.ANTIALIAS)
    favicon_32 = square_img.resize((32, 32), Image.ANTIALIAS)
    favicon_16.save('favicon.ico', format='ICO', sizes=[(16, 16), (32, 32)])

if __name__ == '__main__':
    create_icons() 