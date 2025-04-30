"use client";

import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AudioPlayer() {
  const [sound, setSound] = useState<Howl | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const backgroundMusic = new Howl({
      src: ["https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"],
      loop: true,
      volume: 0.3,
      autoplay: false,
    });

    setSound(backgroundMusic);

    return () => {
      backgroundMusic.unload();
    };
  }, []);

  const toggleMute = () => {
    if (sound) {
      if (isMuted) {
        sound.play();
        sound.fade(0, 0.3, 1000);
      } else {
        sound.fade(0.3, 0, 1000);
        setTimeout(() => sound.pause(), 1000);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary"
      onClick={toggleMute}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
}