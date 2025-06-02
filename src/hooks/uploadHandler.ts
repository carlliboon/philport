import { supabase } from "@/lib/supabase";
import { generateFileName } from "@/lib/utils";

interface UploadFileParams {
  e: React.ChangeEvent<HTMLInputElement>;
  bucket: string;
  prefix: string;
  setFileName: (name: string) => void;
  setUploading: (uploading: boolean) => void;
  setUploadError: (error: string) => void;
  setFileUrl: (url: string) => void;
  setUploadProgress: (progress: number) => void;
}

export const handleFileUpload = async ({ e, bucket, prefix, setFileName, setUploading,  setUploadError, setFileUrl,
  setUploadProgress, }: UploadFileParams) => {
    
  const file = e.target.files?.[0];
  if (!file) return;

  setFileName(file.name);
  setUploading(true);
  setUploadError("");
  setUploadProgress(0);

  const fileName = generateFileName({
    prefix,
    originalName: file.name,
    timestamp: true // Use timestamp for general uploads to ensure uniqueness
  });

  // Supabase JS client upload – returns detailed error info on failure
  const { error } = await supabase.storage.from(bucket).upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  });

  setUploading(false);

  if (error) {
    setUploadError(error.message ?? "Upload failed");
    return;
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  setUploadProgress(100);
  setFileUrl(data.publicUrl);
};
