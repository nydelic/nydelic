import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ClientOnlyPortal {
  children: ReactNode;
  containerId: string;
}

function ClientOnlyPortal({ children, containerId }: ClientOnlyPortal) {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(containerId) as HTMLDivElement;
    setMounted(true);
  }, [containerId]);

  return mounted ? createPortal(children, ref.current as HTMLDivElement) : null;
}

export default ClientOnlyPortal;
