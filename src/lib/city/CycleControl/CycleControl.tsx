import { useEffect, useState } from "react";

export const DayCycleControl = () => {
    const [time, setTime] = useState(12); // meio-dia padrão

    useEffect(() => {
        const root = document.documentElement;

        const angle = (time / 24) * Math.PI * 2 - Math.PI;

        const sunX = (Math.sin(angle) + 1) / 2;
        const sunY = Math.max(0, Math.cos(angle)); // evita luz vindo de baixo

        const intensity = Math.pow(sunY, 1.5); // curva mais natural

        const sunset = 1 - sunY;

        const r = 255;
        const g = 220 - sunset * 120;
        const b = 180 - sunset * 150;

        const sunColor = `rgb(${r}, ${g}, ${b})`;

        root.style.setProperty("--sun-x", sunX.toString());
        root.style.setProperty("--sun-y", sunY.toString());
        root.style.setProperty("--sun-intensity", intensity.toString());
        root.style.setProperty("--sun-color", sunColor);

    }, [time]);

    return (
        <>
            <input
                type="range"
                min={0}
                max={24}
                step={0.1}
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
            />

            <span>
                Hora: {time.toFixed(1)}h
            </span>
        </>
    );
};