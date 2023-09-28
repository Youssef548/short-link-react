import React, { useState } from "react";
import Container from "../Container";
import "./shortLink.css";

const ShortLink = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [savedOriginalLink, setSaveOriginalLink] = useState("");

  const [shortenedLink, setShortenedLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShortenClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalLink}`
      );
      if (response.ok) {
        const data = await response.json();
        setSaveOriginalLink(originalLink);
        setShortenedLink(data.result.full_short_link2);
      } else {
        console.error("Error shortening link");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = shortenedLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="relative py-10">
      <div className="absolute bg-white w-full h-24 top-0 z-[-1]"></div>
      <Container>
        <div className="py-6 px-4 md:px-24 shortLink rounded-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 relative">
            <input
              type="text"
              placeholder="Shorten a link here"
              className="flex-1 focus:outline-none focus:bg-white px-6 py-4 text-gray-600 rounded-lg bg-white border border-gray-300"
              value={originalLink}
              onChange={(e) => setOriginalLink(e.target.value)}
            />
            <button
              onClick={handleShortenClick}
              className={`w-full md:w-fit mt-4 md:mt-0 inline font-medium px-12 py-4 rounded-lg bg-primary-cyan hover:bg-primary-cyan-hover text-white duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
          </div>
        </div>
        {shortenedLink && (
          <div className="mt-4 bg-white rounded-lg py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between">
            <p className="text-black text-xl mb-4 md:mb-0">
              {savedOriginalLink}
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a
                href={shortenedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-cyan"
              >
                {shortenedLink}
              </a>
              <button
                onClick={handleCopyClick}
                className={`py-2 px-6 rounded-lg duration-300 text-white mt-4 md:mt-0 ${
                  isCopied
                    ? "bg-[#3a3053] cursor-not-allowed"
                    : "bg-primary-cyan hover:bg-primary-cyan-hover"
                }`}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShortLink;
