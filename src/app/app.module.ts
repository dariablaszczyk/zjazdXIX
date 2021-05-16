import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetailsComponent } from './components/details/details.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { KelvinPipe } from './kelvin.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
    CityDetailsComponent,
    KelvinPipe
  ],
  bootstrap: [AppComponent],
  providers: [WeatherService]
})
export class AppModule {}
