// Convart String to slug

export const createSlug = (string = "hello kako ai am a ") => {
  const slug = string.toLowerCase().replace(/[^\w]/, "-");

  return slug;
};
