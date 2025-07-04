type TripResultProps = {
  price: number | null;
};

export default function TripResult({ price }: TripResultProps) {
  if (price === null) return null;
  return (
    <div style={{ marginTop: 20 }}>
      <h2>Total Price: ${price}</h2>
    </div>
  );
}
