import fs from 'fs';
import path from 'path';


export function getGalleryImages(): string[] {
  // Path to your public/image directory
  const imagesDirectory = path.join(process.cwd(), 'public/gallery');
  
  try {
    // Read all files in the directory
    const fileNames = fs.readdirSync(imagesDirectory);
    
    // Filter out only the gallery images
    const galleryFiles = fileNames.filter(file => 
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );

    // Return the formatted absolute paths for the frontend
    return galleryFiles.map(file => `/gallery/${file}`);
  } catch (error) {
    console.error("Error reading gallery images:", error);
    return [];
  }
}