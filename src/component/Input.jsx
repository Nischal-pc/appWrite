import { useState } from "react";
import { storage } from "../../appWrite";
import { ID } from "appwrite";
import toast from "react-hot-toast";

const Input = () => {
  const [file, setFile] = useState(null);
  const [uploadedImageId, setUploadedImageId] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file) return;
    try {
      const response = await storage.createFile(
        "6751e9ff0032e82f42a8",
        ID.unique(),
        file
      );
      setUploadedImageId(response.$id);
      toast("Uploaded Successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      toast(
        "Error Uploading!",
        {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        },
        error
      );
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[720px] mx-auto">
        <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
          <a
            target="_blank"
            href="https://www.material-tailwind.com/docs/html/card"
            className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
          >
            Storage <b>image</b>.
          </a>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src={`https://cloud.appwrite.io/v1/storage/buckets/${
                import.meta.env.VITE_APP_BUCKET_ID
              }/files/${uploadedImageId}/view?project=${
                import.meta.env.VITE_APP_PROJECT_ID
              }`}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Apple AirPods
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                $95.00
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
          <div className="flex fle  p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
              onClick={handleUpload}
            >
              upload
            </button>
            <input
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              placeholder="Upload"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
