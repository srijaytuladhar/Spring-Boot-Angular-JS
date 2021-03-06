import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { fromEventPattern } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,  
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
