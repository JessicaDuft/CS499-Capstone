import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { RoomListingComponent } from './room-listing/room-listing.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomDataService } from './services/room-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    RoomListingComponent,
    TripCardComponent,
    RoomCardComponent,
    AddTripComponent,
    AddRoomComponent,
    EditTripComponent,
    EditRoomComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TripDataService,
    RoomDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }