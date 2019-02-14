import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CorejavaComponent } from './components/corejava/corejava.component';
import { HomeComponent } from './components/home/home.component';
import { AngularComponent } from './components/angular/angular.component';
import { SpringComponent } from './components/spring/spring.component';
import { SearchComponent } from './components/search/search.component';
import { AngularTutorialComponent } from './components/angular/angular-tutorial.component';
import { AngularInstallComponent } from './components/angular/tutorials/angular-install.component';
import { AngularProjCreateComponent } from './components/angular/tutorials/angular-proj-create.component';
import { TutorialWidgetsComponent } from './components/common/tutorial-widgets.component';
import { InterviewWidgetsComponent } from './components/common/interview-widgets.component';
import { RelatedArticlesComponent } from './components/common/related-articles.component';
import { PrevNextArticleComponent } from './components/common/prev-next-article.component';
import { AddBootstapToAngularComponent } from './components/angular/tutorials/add-bootstap-to-angular.component';
import { AngularMaterialComponent } from './components/angular/angular-material.component';
import { AddingUiRouterComponent } from './components/angular/tutorials/adding-ui-router.component';
import { FormcontrolsComponent } from './components/angular/tutorials/formcontrols.component';
import { IocComponent } from './components/spring/ioc.component';
import { AopComponent } from './components/spring/aop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorejavaComponent,
    HomeComponent,
    AngularComponent,
    SpringComponent,
    SearchComponent,
    AngularTutorialComponent,
    AngularInstallComponent,
    AngularProjCreateComponent,
    TutorialWidgetsComponent,
    InterviewWidgetsComponent,
    RelatedArticlesComponent,
    PrevNextArticleComponent,
    AddBootstapToAngularComponent,
    AngularMaterialComponent,
    AddingUiRouterComponent,
    FormcontrolsComponent,
    IocComponent,
    AopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
