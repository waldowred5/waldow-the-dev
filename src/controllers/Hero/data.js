import { TRIG_RATIO } from 'utils/constants';

export const lights = [
  {
    color: [0x07B8ED, 2.5, 11],
    position: [1, 0, 8],
  },
  {
    color: [0x07B8ED, 2.5, 11],
    position: [-2, 1, -10],
  },
  {
    color: [0x38E000, 2.5, 11],
    position: [0, 10, 1],
  },
  {
    color: [0x38E000, 2.5, 11],
    position: [0, -10, -1],
  },
  {
    color: [0xC56CEF, 2.5, 11],
    position: [10, 3, 0],
  },
  {
    color: [0xC56CEF, 2.5, 11],
    position: [-10, -1, 0],
  },
];

export const trigPaths = [
  {
    radius: 2,
    x: {
      ratio: TRIG_RATIO.COS,
      amount: 1.05,
    },
    y: {
      ratio: TRIG_RATIO.SIN,
      amount: 1.05,
    },
    z: {
      ratio: TRIG_RATIO.COS,
      amount: 1.05,
    },
  },
  {
    radius: 2.25,
    x: {
      ratio: TRIG_RATIO.COS,
      amount: 0.8,
    },
    y: {
      ratio: TRIG_RATIO.SIN,
      amount: 0.8,
    },
    z: {
      ratio: TRIG_RATIO.SIN,
      amount: 0.8,
    },
  },
  {
    radius: 2.5,
    x: {
      ratio: TRIG_RATIO.COS,
      amount: 1.25,
    },
    y: {
      ratio: TRIG_RATIO.COS,
      amount: 1.25,
    },
    z: {
      ratio: TRIG_RATIO.SIN,
      amount: 1.25,
    },
  },
  {
    radius: 2.75,
    x: {
      ratio: TRIG_RATIO.SIN,
      amount: 0.6,
    },
    y: {
      ratio: TRIG_RATIO.COS,
      amount: 0.6,
    },
    z: {
      ratio: TRIG_RATIO.SIN,
      amount: 0,
    },
  },
];
