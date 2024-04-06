import CB from "@/component/project/mos/body/cb";
import CRM from "@/component/project/mos/body/crm";
import CT from "@/component/project/mos/body/ct";
import HiPot from "@/component/project/mos/body/hipot";
import IR from "@/component/project/mos/body/ir";
import K from "@/component/project/mos/body/k";
import MCB from "@/component/project/mos/body/mcb";
import PD from "@/component/project/mos/body/pd";
import PT from "@/component/project/mos/body/pt";
import Relay from "@/component/project/mos/body/relay";
import TD from "@/component/project/mos/body/td";
import Z from "@/component/project/mos/body/z";


export type OptionKey = 'evSwgr' | 'evTrafo' | 'evCable' | 'evRmu' | 'hvSwgr' | 'hvTrafo' | 'hvCable' | 'hvRmu' | 'mvSwgr' | 'mvTrafo' | 'mvCable' | 'mvRmu' | 'lvSwgr' | 'lvTrafo' | 'lvCable' | 'lvRmu';

export const body: Record<OptionKey, Record<string, React.ComponentType>> = {
  'evSwgr': {
    'ACB': CB,
    'Relay': Relay,
    'CT': CT,
    'PT': PT,
    'MCB': MCB,
    'K': K,
  },
  'evTrafo': {
    'TD': TD,
    'IR': IR,
    'CRM': CRM,
    'Z': Z,
  },
  'evCable': {
    'HiPot': HiPot,
    'PD': PD,
  },
  'evRmu': {
    'Relay': Relay,
  },
  'hvSwgr': {
    'CB': CB,
    'Relay': Relay,
    'CT': CT,
    'PT': PT,
    'MCB': MCB,
    'K': K,
  },
  'hvTrafo': {
    'TD': TD,
    'IR': IR,
    'CRM': CRM,
    'Z': Z,
  },
  'hvCable': {
    'HiPot': HiPot,
    'PD': PD,
  },
  'hvRmu': {
    'Relay': Relay,
  },
  'mvSwgr': {
    'CB': CB,
    'Relay': Relay,
    'CT': CT,
    'PT': PT,
    'MCB': MCB,
    'K': K,
  },
  'mvTrafo': {
    'TD': TD,
    'IR': IR,
    'CRM': CRM,
    'Z': Z,
  },
  'mvCable': {
    'HiPot': HiPot,
    'PD': PD,
  },
  'mvRmu': {
    'Relay': Relay,
  },
  'lvSwgr': {
    'ACB': CB,
    'Relay': Relay,
    'CT': CT,
    'PT': PT,
    'MCB': MCB,
    'K': K,
  },
  'lvTrafo': {
    'TD': TD,
    'IR': IR,
    'CRM': CRM,
    'Z': Z,
  },
  'lvCable': {
    'HiPot': HiPot,
    'PD': PD,
  },
  'lvRmu': {
    'Relay': Relay,
  },
};