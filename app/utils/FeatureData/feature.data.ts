import {RiSecurePaymentFill} from "react-icons/ri"
import {MdOutlineWeb} from "react-icons/md"
import {BsFillShieldLockFill} from "react-icons/bs"
import { ContactType, FeatureIconsProps } from "@/Types";

import {IconHeadset,IconMail,IconMap} from '@tabler/icons-react'



export const businessService:Array<FeatureIconsProps> =[
    {
        icon:RiSecurePaymentFill,
        label:"Easy and Safe Payment",
        text:"Get payments and make payments within second Payment Process should be easier and safer for all",
        bgcolor:"bg-[#001582]"
    },
    {
        icon:MdOutlineWeb,
        label:"Web and Mobile Acccess",
        text:"Get access to your accounts whenever you want.",
        bgcolor:"bg-[#61CEF6]"
    },
    {
        icon:BsFillShieldLockFill,
        label:"Verivied and Secure",
        text:"We always think about your safety.That's why we make it Rock Tight Secured and also verivied by your trusted.",
        bgcolor:"bg-[#9854C1]"
    }
]


export const contact:Array<ContactType> =[
    {
        icon:IconMail,
        text:"thant.zin.windev@gmail.com"
    },
    {
        icon:IconHeadset,
        text:"09985099050"
    },
    {
        icon:IconMap,
        text:"Thanlyin,Yangon"
    }
]
