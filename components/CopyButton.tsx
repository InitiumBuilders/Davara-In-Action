"use client";

import { useState, useCallback } from "react";
import Toast from "./Toast";

interface CopyButtonProps {
  text: string;
  label: string;
  className?: string;
}

export default function CopyButton({ text, label, className = "" }: CopyButtonProps) {
  const [toast, setToast] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  }, [text]);

  return (
    <>
      <button
        onClick={copy}
        className={`btn btn-teal ${className}`}
        aria-label={`Copy ${label}`}
      >
        {label}
      </button>
      <Toast message={`Copied: ${text.slice(0, 30)}${text.length > 30 ? "…" : ""}`} visible={toast} />
    </>
  );
}
