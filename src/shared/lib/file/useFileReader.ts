import { imageCompression } from "@/shared/api/compressImage";

export const handleFileReader = (
  e: React.ChangeEvent<HTMLInputElement>,
  useScenario: string,
  extesnion: string,
  width: number,
  height: number,
): Promise<string | boolean> => {
  return new Promise((resolve) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {      
      const file = files[0];
      const reader = new FileReader();


      reader.onloadend = async () => {
        if (typeof reader.result === "string") {
          const picToCompress = reader.result;
          const result = await imageCompression(
            picToCompress,
            useScenario,
            extesnion,
            width,
            height,
          );
          resolve(result);
        } else {
          resolve(false);
        }
      };
      reader.readAsDataURL(file);
    }
  });
};
