import { atom } from "nanostores";

export const activeCurrency = atom('BCV');
export const bcvPrice = atom(0);
export const paraleloPrice = atom(0);
export const lastUpdated = atom('')