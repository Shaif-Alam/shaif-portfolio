import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './modules/matrial/matrial.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    KeyframesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgbModule,
    MatrialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
