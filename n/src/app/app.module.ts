import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor.service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevaHabilidadComponent } from './componentes/hys/nueva-habilidad.component';
import { EditarHabilidadComponent } from './componentes/hys/editar-habilidad.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    EditarAcercaDeComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
