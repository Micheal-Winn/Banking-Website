import { NavbarType } from "@/Types";

export const navLists:Array<NavbarType> = [
    {
        name:"Home",
        link:"home"
    },
    {
        name:"Features",
        link:"features"
    },
    {
        name:"Business",
        link:"business"
    },
    {
        name:"Payments",
        link:"payment"
    },
    {
        name:"Help",
        link:"help"
    },
];

export const mobileNavLists:Array<NavbarType> = [
    {
        name:"Home",
        link:"#home"
    },
    {
        name:"Features",
        link:"#features"
    },
    {
        name:"Business",
        link:"#business"
    },
    {
        name:"Payments",
        link:"#payment"
    },
    {
        name:"Help",
        link:"#help"
    },
    {
        name:"Sign In",
        link:"/auth"
    },
    {
        name:"Sign Up",
        link:"/auth"
    },
]