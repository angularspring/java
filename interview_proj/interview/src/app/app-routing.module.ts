import { NgModule } from '@angular/core';
import { RootModule, UIRouterModule } from '@uirouter/angular';
import { CorejavaComponent } from './components/corejava/corejava.component';
import { HomeComponent } from './components/home/home.component';
import { AngularComponent } from './components/angular/angular.component';
import { SpringComponent } from './components/spring/spring.component';
import { SearchComponent } from './components/search/search.component';
import { AngularTutorialComponent } from './components/angular/angular-tutorial.component';
import { AngularInstallComponent } from './components/angular/tutorials/angular-install.component';
import { AngularProjCreateComponent } from './components/angular/tutorials/angular-proj-create.component';
import { AddBootstapToAngularComponent } from './components/angular/tutorials/add-bootstap-to-angular.component';
import { AngularMaterialComponent } from './components/angular/angular-material.component';
import { AddingUiRouterComponent } from './components/angular/tutorials/adding-ui-router.component';
import { FormcontrolsComponent } from './components/angular/tutorials/formcontrols.component';
import { IocComponent } from './components/spring/ioc.component';

const rootModule: RootModule = {
  states: [{
    name:"coreJava",
    url: "/CoreJava",
    component: CorejavaComponent
  },
  {
    name:"home",
    url:"/",
    component:HomeComponent
  },
  {
    name:'angular7',
    url:'/angular7',
    component:AngularComponent
  },
  {
    name:'spring',
    url:'/spring',
    component:SpringComponent
  },
  {
    name:'springCore',
    url:'/spring_ioc',
    component:IocComponent
  },
  {
    name:'search',
    url:'/search/:keyword',
    component:SearchComponent
  },
  {
    name:'angularTutorial',
    url:'/angular_tutorial',
    component:AngularTutorialComponent
  },
  {
    name:'angularInstall',
    url:'/angular_installation',
    component:AngularInstallComponent
  },
  {
    name:'angularProjCreation',
    url:'/angular_project_creation',
    component:AngularProjCreateComponent
  },
  {
    name:'addBootstrapToAngular',
    url:'/add_bootstrap_to_angular7',
    component:AddBootstapToAngularComponent
  },
  {
    name:'angularMaterial',
    url:'/angular_material',
    component:AngularMaterialComponent
  },
  {
    name:'addingUiRouter',
    url:'/adding_ui_router_to_angular',
    component:AddingUiRouterComponent
  },
  {
    name:'formControls',
    url:'/adding_form_controls_angular',
    component:FormcontrolsComponent
  }
  ],
  otherwise:"/"
};


@NgModule({
  imports: [UIRouterModule.forRoot(rootModule)],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }