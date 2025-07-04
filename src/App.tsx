import { useState } from "react";
import Layout from "./components/Layout";
import TripForm from "./components/TripForm";
import TripResult from "./components/TripResult";
import { calculateTripPrice } from "./helpers/calculateTripPrice";

export default function App() {
  const [price, setPrice] = useState<number | null>(null);

  const handleFormSubmit = (params: {
    km: number;
    minutes: number;
    hour: number;
  }) => {
    const result = calculateTripPrice(params);
    setPrice(result);
  };

  return (
    <Layout>
      <TripForm onSubmit={handleFormSubmit} />
      <TripResult price={price} />
    </Layout>
  );
}
