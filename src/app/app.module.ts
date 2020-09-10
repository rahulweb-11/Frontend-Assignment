import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './Landing Page/landing-page/landing-page.component';
import { ProfileDetailComponent } from './Profile Detail/profile-detail/profile-detail.component';

const appRoutes: Routes=[
  {path: '', component: LandingPageComponent},
 {path:'profile', component: ProfileDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
