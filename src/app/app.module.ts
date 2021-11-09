import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { InfoBodyComponent } from './body/info-body.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './header/top-bar.component';
import { layoutComponent } from './Layout/layout.component';
import { SidebarComponent } from './sidebar/sidedar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeSource } from './body/Home-source.component';
import { HomeHistory } from './body/Home-History.component';
import { Talk } from './body/Talk-Read.component';
import { TalkSource } from './body/Talk-source.component';
import { BodyCardComponent } from './body/Body-card.component';
import { UserInfoComponent } from './header/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserInfoComponenet } from './header/edit-user-info.componenet';
import { FormsModule } from '@angular/forms';
import { userInfoService } from './header/user-info.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './Auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    layoutComponent,
    InfoBodyComponent,
    HomeSource, 
    HomeHistory,
    Talk,
    TalkSource,
    BodyCardComponent, 
    UserInfoComponent,
    EditUserInfoComponenet,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'wikipedia-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
