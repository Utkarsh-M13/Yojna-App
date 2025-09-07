import { ImageSourcePropType } from "react-native";

// images.ts
export const IMAGES = {
  children: require('@/assets/images/children.jpg'),
  electronics: require('@/assets/images/electronics.jpg'),
  farm: require('@/assets/images/farm.jpg'),
  monkeys: require('@/assets/images/monkeys.jpg'),
  seafront: require('@/assets/images/seafront.jpg'),
  women: require('@/assets/images/women.jpg'),
  books: require('@/assets/images/books.jpg'),
  emergency: require('@/assets/images/emergency.jpg'),
  gas: require('@/assets/images/gas.jpg'),
  hospital: require('@/assets/images/hospital.jpg'),
  house: require('@/assets/images/house.jpg'),
  bank: require('@/assets/images/bank.jpg'),
  pension: require('@/assets/images/pension.jpg'),
  generic: require('@/assets/images/generic.jpg'),
  rate: require('@/assets/icons/rate.png'),
  rate_fill: require('@/assets/icons/rate-fill.png'),
} as const;


export type ImageKey = keyof typeof IMAGES;

const _: Record<ImageKey, ImageSourcePropType> = IMAGES;
