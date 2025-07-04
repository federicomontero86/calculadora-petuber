import { useState } from "react";

type TripFormProps = {
  onSubmit: (params: { km: number; minutes: number; hour: number }) => void;
};

export default function TripForm({ onSubmit }: TripFormProps) {
  const [km, setKm] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hour, setHour] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      km: Number(km),
      minutes: Number(minutes),
      hour: Number(hour),
    });
    setKm(""); // Limpia el input de km
    setMinutes(""); // Limpia el input de minutos
    setHour(""); // Limpia el input de hora
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Kilometers: </label>
        <input
          type="number"
          value={km}
          min={0}
          step="any"
          onChange={(e) => setKm(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Minutes: </label>
        <input
          type="number"
          value={minutes}
          min={0}
          onChange={(e) => setMinutes(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Hour (0-23): </label>
        <input
          type="number"
          value={hour}
          min={0}
          max={23}
          onChange={(e) => setHour(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: 12 }}>
        Calculate
      </button>
    </form>
  );
}
