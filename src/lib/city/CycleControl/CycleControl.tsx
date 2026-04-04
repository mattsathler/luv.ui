import { useEffect, useState } from "react";

export const DayCycleControl = () => {
    const [time, setTime] = useState(12); // meio-dia padrão

    useEffect(() => {
        const root = document.documentElement;

        // converte hora → ângulo
        const angle = (time / 24) * Math.PI * 2 - Math.PI;

        // posição do sol
        const sunX = (Math.sin(angle) + 1) / 2;
        const sunY = (Math.cos(angle) + 1) / 2;

        // intensidade (noite mais escuro)
        const intensity = Math.max(0.1, sunY);

        root.style.setProperty("--sun-x", sunX.toString());
        root.style.setProperty("--sun-y", sunY.toString());
        root.style.setProperty("--sun-intensity", intensity.toString());

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