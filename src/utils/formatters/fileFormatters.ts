
/**
 * Format a file size in bytes to a human-readable string with appropriate units
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

/**
 * Format a filename to truncate if it's too long
 */
export const formatFileName = (fileName: string, maxLength: number = 20): string => {
  if (!fileName) return '';
  
  if (fileName.length <= maxLength) {
    return fileName;
  }
  
  const extension = fileName.split('.').pop();
  const name = fileName.substring(0, fileName.lastIndexOf('.'));
  
  const truncatedName = name.substring(0, maxLength - extension!.length - 3);
  
  return `${truncatedName}...${extension}`;
};

/**
 * Get file extension from a filename
 */
export const getFileExtension = (fileName: string): string => {
  if (!fileName) return '';
  
  const parts = fileName.split('.');
  if (parts.length === 1) return '';
  
  return parts[parts.length - 1].toLowerCase();
};

/**
 * Get file type category based on extension
 */
export const getFileType = (fileName: string): 'image' | 'video' | 'audio' | 'document' | 'other' => {
  const extension = getFileExtension(fileName);
  
  const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];
  const videoTypes = ['mp4', 'webm', 'mov', 'avi'];
  const audioTypes = ['mp3', 'wav', 'ogg', 'flac'];
  const documentTypes = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt'];
  
  if (imageTypes.includes(extension)) return 'image';
  if (videoTypes.includes(extension)) return 'video';
  if (audioTypes.includes(extension)) return 'audio';
  if (documentTypes.includes(extension)) return 'document';
  
  return 'other';
};
