export const HeadTitle = (project: any) => [
  {
    label: "EV SWITCHGEAR",
    value: 'evSwgr',
  },
  {
    label: "EV TRANSFORMER",
    value: 'evTrafo',
  },
  {
    label: "EV CABLE",
    value: 'evCable',
  },
  {
    label: "EV RMU",
    value: 'evRmu',
  },
  {
    label: "HV SWITCHGEAR",
    value: 'hvSwgr',
  },
  {
    label: "HV TRANSFORMER",
    value: 'hvTrafo',
  },
  {
    label: "HV CABLE",
    value: 'hvCable',
  },
  {
    label: "HV RMU",
    value: 'hvRmu',
  },
  {
    label: "MV SWITCHGEAR",
    value: 'mvSwgr',
  },
  {
    label: "MV TRANSFORMER",
    value: 'mvTrafo',
  },
  {
    label: "MV CABLE",
    value: 'mvCable',
  },
  {
    label: "MV RMU",
    value: 'mvRmu',
  },
  {
    label: "LV SWITCHGEAR",
    value: 'lvSwgr',
  },
  {
    label: "LV TRANSFORMER",
    value: 'lvTrafo',
  },
  {
    label: "LV CABLE",
    value: 'lvCable',
  },
  {
    label: "LV RMU",
    value: 'lvRmu',
  },
  ].filter((item) => item.value && item.value.length > 0);