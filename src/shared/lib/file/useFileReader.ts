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

    const maxSize = 2 * 1024 * 1024;

    if (files && files.length > 0) {
      const file = files[0];

      if (file.size > maxSize) {
        e.currentTarget.value = ""
        resolve(false)
      } else {
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
    }
  });
};
