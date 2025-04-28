import { createClient } from '@/lib/client';

export async function uploadImage(file: File): Promise<string | null> {
  try {
    const supabase = createClient();
    
    // Generate a unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `chat-images/${fileName}`;

    // Upload the file
    const { error } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Failed to upload image:', error);
    return null;
  }
}
