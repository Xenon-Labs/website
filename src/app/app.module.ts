import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppComponent } from './app.component';
import { MaterialModule } from './libs/material.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessComponent } from './components/process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    SkillsComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  exports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
