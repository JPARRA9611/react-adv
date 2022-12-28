import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-Lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element
interface RoutesParams {
  to:string;
  path:string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name:string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-Lazyload/layout/LazyLayout'));

export const routes : RoutesParams[] = [
  {
    to:'/lazyload/',
    path:'/lazyload/*',
    Component: LazyLayout,
    name:'Lazy Layout'
  },
  {
    to:'/no-lazy',
    path:'no-lazy',
    Component: NoLazy,
    name:'No Lazy'
  }
]