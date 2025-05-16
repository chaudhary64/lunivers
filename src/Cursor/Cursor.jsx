import { useEffect, useState, useCallback } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <aside
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
      }}
      className="h-5 w-5 bg-[#5550BE] rounded-full fixed pointer-events-none"
    />
  );
};

export default Cursor;
