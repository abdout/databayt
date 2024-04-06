export const general = [
    { columns: ['Manufacturer', 'SIEMENS', 'Modal no.', 'VACUUM VD4'] },
    { columns: ['Rated current', '630 A', 'Rated voltage', '17.5 kV'] },
    { columns: ['Serial no.', 'T7300768429'] }
  ];

export const mechnical = [
    { item: '1.', description: 'Inspect for physical damage / defects.', checked: 'OK' },
    { item: '2.', description: 'Check nameplate information for correctness.', checked: 'OK' },
    { item: '3.', description: 'Check quality of paint work.', checked: 'OK' },
    { item: '4.', description: 'Check for correct breaker position indications.', checked: 'OK' },
    { item: '5.', description: 'Check for correct spring status indication.', checked: 'OK' },
    { item: '6.', description: 'Check all wiring connection as per approved drawings.', checked: 'OK' },
    { item: '7.', description: 'Check that all grounding are securely connected.', checked: 'OK' },
  ];

export const electrical = [
    { item: '1.', description: 'Anti-Pumping Operation', checked: 'OK' },
    { item: '2.', description: 'Check Interlocks', checked: 'OK' },
    { item: '3.', description: 'Check breaker operation counter.', checked: 'OK' },
    { item: '4.', description: 'Check electrical operation of breaker racking tracks.', checked: 'OK' },
  ];

export const ir = [
    { phase1: 'RG', value1: '1.37', phase2: 'RY', value2: '1.42', phase3: 'RR`', value3: '1.87' },
    { phase1: 'YG', value1: '1.71', phase2: 'YB', value2: '1.95', phase3: 'YY`', value3: '1.44' },
    { phase1: 'BG', value1: '1.46', phase2: 'BR', value2: '1.67', phase3: 'BB`', value3: '1.86' },
  ];

export const crm = [
  { R: '23', Y: '21', B: '22' },
];

export const hipot = [
  { R: '21', Y: '22', B: '23' },
];

export const coil = [
  { Close: '21', Trip1: '22', Trip2: '23' },
];

export const timing = [
  { phase: 'R', close: 33.7, open1: 25.2, col4: 31.5, col5: 65.6, open2: 35.3, col7: 31.5, col8: 65.6 },
  { phase: 'Y', close: 33.2, open1: 25.4, col4: 31.1, col5: 65.6, open2: 35.3, col7: 31.5, col8: 65.6 },
  { phase: 'B', close: 33.7, open1: 25.3, col4: 31.6, col5: 65.6, open2: 35.4, col7: 31.5, col8: 65.6 },
];


