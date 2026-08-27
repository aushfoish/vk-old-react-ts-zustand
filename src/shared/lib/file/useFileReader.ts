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
        e.currentTarget.value = "";
        resolve(false);
      } else {
        const reader = new FileReader();
        reader.onload = async () => {
          if (typeof reader.result === "string") {
            try {
              const picToCompress = reader.result;
              const result = await imageCompression(
                picToCompress,
                useScenario,
                extesnion,
                width,
                height,
              );
              resolve(result);
            } catch (error) {
              console.error(
                "Ошибка при сжатии изображения:",
                error instanceof Error,
              );
              resolve(false);
            }
          } else {
            resolve(false);
          }
        };

        reader.onerror = () => {
          console.error('Ошибка при чтении файла:',
            reader.error instanceof Error ? reader.error.message : 'не удалось прочитать файл'
          )
        }
        reader.readAsDataURL(file);
      }
    }
  });
};
