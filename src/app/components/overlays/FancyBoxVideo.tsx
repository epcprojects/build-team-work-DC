"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyBoxVideoProps {
  isOpen: boolean;
  videoUrl: string;
  onClose?: () => void;
}

type FancyboxShowOptions = Parameters<typeof Fancybox.show>[1] & {
  Toolbar?: {
    display: {
      left: string[];
      middle: string[];
      right: string[];
    };
  };
};

// watch?v=... ya youtu.be/... URL ko embed format mein convert karta hai
function toYoutubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    let videoId = "";
    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else {
      videoId = parsed.searchParams.get("v") ?? "";
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}

export default function FancyBoxVideo({
  isOpen,
  videoUrl,
  onClose,
}: FancyBoxVideoProps) {
  useEffect(() => {
    if (!isOpen) return;

    const options: FancyboxShowOptions = {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
      on: {
        destroy: () => {
          onClose?.();
        },
      },
    };

    const instance = Fancybox.show(
      [
        {
          src: toYoutubeEmbedUrl(videoUrl),
          type: "iframe",
        },
      ],
      options
    );

    return () => {
      instance?.close();
    };
  }, [isOpen, videoUrl, onClose]);

  return null;
}