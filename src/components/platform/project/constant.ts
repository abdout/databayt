export type lead = {
    value: string
    label: string
    image?: string
  }
  
 export const leads: lead[] = [
    {
      value: "الامانة العامة",
      label: "الامانة العامة",
      image: "/author/nmbd.png"
    },
    {
      value: "الامانة السياسية",
      label: "الامانة السياسية",
      image: "/author/almgdad.png"
    },
    {
      value: "امانة المجتمع",
      label: "امانة المجتمع",
      image: "/author/hesham.png"
    },
    {
      value: "امانة الاعلام",
      label: "امانة الاعلام",
      image: "/author/gasm.png"
    },
    {
      value: "امانة الطلاب",
      label: "امانة الطلاب",
      image: "/author/hesham.png"
    },
  ]

  export type status = {
    value: string
    label: string
    image?: string
  }
  
 export const statuses: status[] = [
    {
      value: "on progress",
      label: " جاري",
      
    },
    {
      value: " stuck",
      label: "متوقف",
     
    },
    {
      value: "done",
      label: "تم",
    },
  ]