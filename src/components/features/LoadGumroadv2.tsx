"use client";
import { useEffect } from "react";

const ScriptLoader = () => {
  const script = document.createElement("script");
  script.id = "intercom-script";
  script.src = `https://gumroad.com/js/gumroad.js`;
  script.async = true;
  document.body.append(script);
};

export const LoadGumroadv2 = () => {
  useEffect(() => {
    const sdkScript = document.querySelector("script#intercom-script");

    if (sdkScript) {
      sdkScript.remove();
      delete window.Intercom;
      delete window.intercomSettings;
    }

    ScriptLoader();
  }, []);

  return null;
};
