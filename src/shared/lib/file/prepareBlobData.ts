export const prepareBlobData = (extension:string, bucket:string) => {
  const mime = extension === "jpg" ? "image/jpeg" : "image/png";
  const blobName = `${crypto.randomUUID()}.${extension}`;
  const blobUrl = `${bucket}/${blobName}`;
  return {blobUrl, mime}
};
