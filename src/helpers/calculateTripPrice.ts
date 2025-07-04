type QuotationParams = {
  km: number;
  minutes: number;
  hour: number; // 0-23, trip start hour
};

export function calculateTripPrice({
  km,
  minutes,
  hour,
}: QuotationParams): number {
  const FLAG_DROP = 75;
  const MINIMUM_FARE = 150;
  const PRICE_PER_KM = 25;
  const PRICE_PER_MIN = 5;

  const subtotal =
    FLAG_DROP + Math.ceil(km * PRICE_PER_KM) + minutes * PRICE_PER_MIN;

  let surcharge = 0;
  if (hour >= 20 && hour < 22) {
    surcharge = 0.15;
  } else if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour < 1)) {
    surcharge = 0.25;
  } else if (hour >= 1 && hour < 6) {
    surcharge = 0.35;
  } else if (hour >= 6 && hour < 7) {
    surcharge = 0.15;
  }

  let total = subtotal + subtotal * surcharge;

  if (total < MINIMUM_FARE) {
    total = MINIMUM_FARE;
  }

  // Redondear hacia arriba si termina en .5
  const decimal = total - Math.floor(total);
  if (decimal === 0.5) {
    return Math.ceil(total);
  }
  return Math.round(total);
}
