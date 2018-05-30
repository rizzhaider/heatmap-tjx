import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeatmapTjxComponent } from './heatmap-tjx/heatmap-tjx.component';
import { AuthGuard } from './gaurds/auth.gaurds';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TjxHeatMapService } from './services/tjx_heatmap.service';
import { TjxMinMaxDateService } from './services/tjx_min_max_date.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'tjx', component: HeatmapTjxComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeatmapTjxComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,      
    LeafletModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ'
    })
  ],
  providers: [
    TjxHeatMapService,
    TjxMinMaxDateService,
    DatePipe,
    AuthenticationService,
    UserService,
    AuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
