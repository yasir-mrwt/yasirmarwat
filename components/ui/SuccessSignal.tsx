"use client";

import dynamic from "next/dynamic";
import { Check } from "lucide-react";
import { useReducedMotionPreference } from "@/components/motion/useReducedMotionPreference";

const DotLottie = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then(
      (module) => module.DotLottieReact,
    ),
  { ssr: false, loading: () => <Check aria-hidden="true" /> },
);

export function SuccessSignal() {
  const reducedMotion = useReducedMotionPreference();
  return (
    <div className="success-signal" aria-hidden="true">
      {reducedMotion ? (
        <Check />
      ) : (
        <DotLottie src="/lottie/contact-us.json" autoplay loop={false} />
      )}
    </div>
  );
}
