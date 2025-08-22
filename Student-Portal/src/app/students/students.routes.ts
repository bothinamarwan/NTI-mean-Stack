import {  Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";

export const Sroutes:Routes=[
    { path:'' , redirectTo:'list',pathMatch:'full'},
    {path:'list',component:ListComponent},
    {path:'details/:id',component:DetailsComponent}

];