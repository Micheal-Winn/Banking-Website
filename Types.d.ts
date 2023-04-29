import { ReactNode } from "react"
import { IconType } from "react-icons"
import { Icon } from "@tabler/icons-react"

interface NavbarType {
    name:string,
    link:string
}


interface FeatureIconsProps{
    icon:IconType,
    bgcolor:string,
    label:string,
    text:string
}

interface ContactType{
    icon:Icon,
    text:string
}

