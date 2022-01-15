const TRIG_RATIO = {
  SIN: 'sin',
  COS: 'cos',
  TAN: 'tan',
};

const TRIG_RATIO_MAP = {
  [TRIG_RATIO.SIN]: Math.sin,
  [TRIG_RATIO.COS]: Math.cos,
  [TRIG_RATIO.TAN]: Math.tan,
};

export const TRIG_VALUE_MAP = [
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

export const trigValue = (id, plane, theta) => {
  const radius = TRIG_VALUE_MAP[id].radius;
  const ratio = TRIG_VALUE_MAP[id][plane].ratio;
  const amount = theta * TRIG_VALUE_MAP[id][plane].amount;

  return TRIG_RATIO_MAP[ratio](amount) * radius;
};

const increments = 100;
export const dTheta = 2 * Math.PI / increments;
