"use client";

import dynamic from "next/dynamic";
import { Check } from "lucide-react";
import { useReducedMotion } from "motion/react";

const DotLottie = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then(
      (module) => module.DotLottieReact,
    ),
  { ssr: false, loading: () => <Check aria-hidden="true" /> },
);

export function SuccessSignal() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="success-signal" aria-hidden="true">
      {reducedMotion ? (
        <Check />
      ) : (
        <DotLottie src="/lottie/contact-success.json" autoplay loop={false} />
      )}
    </div>
  );
}
