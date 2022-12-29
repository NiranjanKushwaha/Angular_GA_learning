import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
// import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

@NgModule({
  declarations: [AppComponent, UserComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    // NgxGoogleAnalyticsModule.forRoot('G-1X3FDRM991'),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
