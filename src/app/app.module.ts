import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { HeroesService } from './services/heroes.service';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

//Pipes
import { AppendTextPipe } from './pipes/appendtext.pipe';
import { HideTextPipe } from './pipes/hidetext.pipe';

//Set Locale
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HideTextDirective } from './directives/hide-text.directive';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    AppendTextPipe,
    HideTextPipe,
    HideTextDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
