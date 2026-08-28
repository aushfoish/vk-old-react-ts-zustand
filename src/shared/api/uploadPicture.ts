import { prepareBlobData } from "@/shared/lib/file/prepareBlobData";
import { useWallStore } from "@/entities/posts/model/useWallStore";
import { supabaseFetch } from "./supabase";

export const uploadPicture = async (
  blob: Blob | null,
  bucket: string,
  extension: string,
  scenario: string,
) => {
  if (blob !== null) {
    try {
      const { blobUrl, mime } = prepareBlobData(extension, bucket);
      const response = await supabaseFetch(blobUrl, {
        method: "POST",
        headers: {
          "Content-Type": mime,
        },
        body: blob,
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки изображения: ${response.status}`);
      }
      if (response.ok) {
        if (scenario === "userpic") {
          return blobUrl;
        }
        if (scenario === "graffity") {
          useWallStore.setState({ contentPicture: blobUrl });
          const isPostCreated = await useWallStore.getState().sendPost();
          return isPostCreated;
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log(error)
      }
      return false;
    }
  }
  return false;
};
