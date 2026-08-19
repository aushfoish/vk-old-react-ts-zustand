import { prepareBlobData } from "@/shared/lib/file/prepareBlobData";
// import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { useWallStore } from "@/entities/posts/model/useWallStore";

export const uploadPicture = async (
  blob: Blob | null,
  bucket: string,
  extension: string,
  scenario: string,
) => {
  if (blob !== null) {
    try {
      const { blobUrl, mime } = prepareBlobData(extension, bucket);
      const response = await fetch(blobUrl, {
        method: "POST",
        headers: {
          apikey: "sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
          Authorization:
            "Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
          "Content-Type": mime,
        },
        body: blob,
      });
      if (!response.ok) {
        throw new Error(`Ошибка загрузки изображения: ${response.status}`);
      }
      if (response.ok) {
        if (scenario === "userpic") {
          return blobUrl
        }
        if (scenario === "graffity") {
          useWallStore.setState({ contentPicture: blobUrl });
          const isPostCreated = await useWallStore.getState().sendPost();
          return isPostCreated;
        }
      }
    } catch (error) {
      console.error("Ошибка в uploadPicture:", error);
      return false;
    }
  }
  return false;
};
