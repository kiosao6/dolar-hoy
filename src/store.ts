import { atom, map } from "nanostores";

export const dollarPrice = map({
  bcv: 0,
  paralelo: 0,
  promedio: 0
})

export const activeCurrency = map({
  tasa: 'BCV',
});

export const isDollarActive = atom<boolean>(true);

export interface InputValuesType {
  dolar: null | number 
  bolivares: null | number,
  promedio: null | number
}
export const inputValues = map<InputValuesType>({
  dolar: null,
  bolivares: null,
  promedio: null
});


export const lastUpdated = atom('')
export const totalPrice = atom(0);


// Fetch to get and update the prices
const DOLLAR_URL = 'https://pydolarve.org/api/v1/dollar';
const response = await fetch(DOLLAR_URL);
const data = await response.json();

const tasaPromedio = (data.monitors.bcv.price + data.monitors.enparalelovzla.price) / 2

dollarPrice.set({
  bcv: data.monitors.bcv.price || 0,
  paralelo: data.monitors.enparalelovzla.price || 0,
  promedio: Math.round(tasaPromedio * 100) / 100
})

lastUpdated.set(data.datetime.date)