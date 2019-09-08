import Loadable from "react-loadable"
import React from "react"
function Loading(){
    return <div></div>
}
let Home=Loadable({loading:Loading,loader:()=>import("@/index")})
let Login=Loadable({loading:Loading,loader:()=>import("../views/login")})
let Add=Loadable({loading:Loading,loader:()=>import("@/testpaper/add/add")})
let Classify=Loadable({loading:Loading,loader:()=>import("@/testpaper/classify/classify")})
let Lookover=Loadable({loading:Loading,loader:()=>import("@/testpaper/lookover/lookover")})
let Adduser=Loadable({loading:Loading,loader:()=>import("@/user/adduser/adduser")})
let Usershow=Loadable({loading:Loading,loader:()=>import("@/user/usershow/usershow")})
let Addexam=Loadable({loading:Loading,loader:()=>import("@/exam/addexam/addexam")})
let Examlist=Loadable({loading:Loading,loader:()=>import("@/exam/examlist/examlist")})
let Class=Loadable({loading:Loading,loader:()=>import("@/class/class/class")})
let Classrome=Loadable({loading:Loading,loader:()=>import("@/class/classrome/classrome")})
let Student=Loadable({loading:Loading,loader:()=>import("@/class/student/student")})
let Stayclass=Loadable({loading:Loading,loader:()=>import("@/yueparper/stayclass/stayclass")})
let Api=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/api")})
let Iddata=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/iddata")})
let Port=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/port")})
let Power=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/power")})
let Userdata=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/userdata")})
let View=Loadable({loading:Loading,loader:()=>import("@/user/usershow/data/view")})
const routes = [
    {
        component:Home,
        path:"/home",
        children:[{
            component:Add,
            path:"/home/add"
        },{
            component:Classify,
            path:"/home/classify"
        },{
            component:Lookover,
            path:"/home/lookover"
        },{
            component:Adduser,
            path:"/home/adduser"
        },{
            component:Usershow,
            path:"/home/usershow",
            children:[{
                component:Api,
                path:"/home/usershow/api",
            },{
                component:Iddata,
                path:"/home/usershow/iddata",
            },{
                component:Port,
                path:"/home/usershow/port",
            },{
                component:Power,
                path:"/home/usershow/power",
            },{
                component:Userdata,
                path:"/home/usershow/userdata",
            },{
                component:View,
                path:"/home/usershow/view",
            },{
                path:"/home/usershow" ,
                redirect:"/home/usershow/userdata"
            }]
        },{
            component:Addexam,
            path:"/home/addexam"
        },{
            component:Class,
            path:"/home/class"
        },{
            component:Classrome,
            path:"/home/classrome"
        },{
            component:Student,
            path:"/home/student"
        },{
            component:Examlist,
            path:"/home/examlist"
        },{
            component:Stayclass,
            path:"/home/stayclass"
        },{
            path:"/home" ,
            redirect:"/home/classify"
        }]
    },
    {
        component:Login,
        path:"/login"
       
    },
    {   
        path:"/" ,
        redirect:"/login"
    }
]
export {
    routes
}