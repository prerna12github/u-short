"use client";
import React, { useState } from "react";
import { AlertBasic } from "./Alert";


export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(
        `https://u-shortner.vercel.app/shorten?url=${encodeURIComponent(url)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        },
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setErrors(data.detail);
        setStatus("error");
      } else {
        const base = `https://u-shortner.vercel.app/${data}`;
        console.log(base);
        setShortUrl(base);
        setStatus("success");
      }
    } catch (error:unknown) {
      console.error(error);
      setStatus("error");
      const message = error instanceof Error ? error.message : "Unknown error";
      setErrors(message);
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center dark mt-8">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold font-mono text-gray-200 mb-4">
          Enter your long URL
        </h2>

        <form className="flex flex-col">
          <input
            placeholder="https://www.example.com"
            className="font-mono bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button
            className="flex justify-center bg-linear-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150 w-45 font-mono"
            type="submit"
            onClick={handleSubmit}
          >
            Shorten URL
          </button>
          {status === "loading" && (
            <p className="font-mono text-gray-200 mt-4">Shortening...</p>
          )}
          {status === "error" && (
            <p className="font-mono text-red-500 mt-4">Error: {errors}</p>
          )}
          {shortUrl && (
            <p className="font-mono text-gray-200 mt-4">
              Your short URL : {shortUrl}
            </p>
          )}
          
          <div className="flex gap-8">
          {shortUrl && (
            <button
              className="flex justify-center bg-linear-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded-md mt-4  hover:to-blue-600 transition ease-in-out duration-150 w-45 font-mono"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                setVisible(true);
              }}
            >
              Copy
            </button>
          )}
          </div>
          {visible && <AlertBasic />}
          {visible && <button className="flex justify-center bg-linear-to-r from-red-500 to-red-600 text-white font-bold py-2 px-4 rounded-md mt-4  hover:to-red-700 transition ease-in-out duration-150 w-20 font-mono" onClick={() => setVisible(false)}>Close</button>}
        </form>
      </div>
    
     </div>
  );
}