export const data = [
  {
    item: "switchgear",
    subitem: [
      {
        subitem: "cb",
        activity: ["ir", "crm", "timing", "pick", "hipot", "pd", "si", "spring"]
      },
      {
        subitem: "dw",
        activity: ["ir", "crm", "hipot", "load", "lockout", "interlock"]
      },
      {
        subitem: "ct",
        activity: ["ir", "wr", "ratio", "polar", "excit", "accuracy", "burden", "saturation", "pi"]
      },
      {
        subitem: "pt",
        activity: ["ir", "wr", "ratio", "polar", "excit", "accuracy", "burden", "saturation", "pi", "short", "z", "angle", "g"]
      },
      {
        subitem: "dm",
        activity: ["amp", "volt", "power", "pf", "freq", "n"]
      },
      {
        subitem: "sa",
        activity: ["leak", "residaul", "respone", "energy"]
      },

      // ...add more subitems as needed
    ]
  },
  {
    item: "transformer",
    subitem: [
      {
        subitem: "core",
        activity: ["ir", "wr", "ratio", "z", "short", "open", "hipot", "temp", "g"] // ...add activities as needed
      },
      {
        subitem: "insulation",
        activity: ["ir", "pf", "pd", "moisture", "furan", "ipf", "oq"]
      },
      {
        subitem: "cool",
        activity: ["level", "temp", "flow", "fan", "radiator", "relief"]
      },
      {
        subitem: "tap",
        activity: ["activity a", "activity b"]
      },
      {
        subitem: "bush",
        activity: ["ir", "pf", "c", "level"]
      },
      {
        subitem: "function",
        activity: ["avr", "efficiency", "loss", "overload", "stwc","livw", "pfvw", "vibration", "sound", "oil"]
      },
      // ...add more subitems as needed
    ]
  },
  
  {
    item: "relay",
    subitem: [
      {
        subitem: "21",
        activity: ["it", "dsv"]
      },
      {
        subitem: "32",
        activity: ["dpc", "det"]
      },
      {
        subitem: "37",
        activity: ["usv", "ot"]
      },
      {
        subitem: "47",
        activity: ["psv", "vat"]
        },
        {
          subitem: "50",
          activity: ["osv", "ipt"]
        },
        {
          subitem: "51",
          activity: ["tosv", "tdc"]
        },
        {
          subitem: "52",
          activity: ["cbct", "cbtt"]
        },
        {
          subitem: "67",
          activity: ["dosv", "det"]
        },
        {
          subitem: "78",
          activity: ["pacc", "pdm"]
        },
        {
          subitem: "79",
          activity: ["aft", "rtv"]
        },
        {
          subitem: "85",
          activity: ["cprt", "csc"]
        },
        {
          subitem: "87",
          activity: ["drt", "dpcal"]
        },
        {
          subitem: "89",
          activity: ["lsft", "spe"]
        },
        {
          subitem: "90",
          activity: ["vrc", "vsa"]
        },
        {
          subitem: "91",
          activity: ["vdsv", "vpdc"]
        },
        {
          subitem: "92",
          activity: ["vpdc", "vpdc"]
        }
      ]
    },
    {
      item: "auxiliary",
      subitem: [
        {
          subitem: "24",
          activity: ["vhr", "mc"]
        },
        {
          subitem: "27",
          activity: ["uvr", "mc"]
        },
        {
          subitem: "40",
          activity: ["lfr", "mc"]
        },
        {
          subitem: "46",
          activity: ["rpr", "mc"]
        },
        {
          subitem: "49",
          activity: ["tor", "usv"]
        },
        {
          subitem: "55",
          activity: ["pfr", "usv"]
        },
        {
          subitem: "59",
          activity: ["ovr", "psv"]
        },
        {
          subitem: "60",
          activity: ["vbr", "psv"]
        },
        {
          subitem: "64",
          activity: ["gdr", "psv"]
        },
        {
          subitem: "67",
          activity: ["dor", "dosv"]
        },
        {
          subitem: "81",
          activity: ["fr", "psv"]
        },
        {
          subitem: "86",
          activity: ["lor", "bc"]
        },
        {
          subitem: "94",
          activity: ["tsr", "conf"]
        },
        {
          subitem: "95",
          activity: ["ss", "sv"]
        },
        {
          subitem: "98",
          activity: ["dcd", "conf"]
        }
      ]
    },
  
  
  {
    item: "cable",
    subitem: [
      {
        subitem: "buch",
        activity: [] // ...add activities as needed
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      // ...add more subitems as needed
    ]
  },
  {
    item: "rmu",
    subitem: [
      {
        subitem: "buch",
        activity: ["activity a", "activity b", "activity a", "activity b"] // ...add activities as needed
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      {
        subitem: "21",
        activity: ["activity a", "activity b"]
      },
      // ...add more subitems as needed
    ]
  },
  // ...add more items as needed
];