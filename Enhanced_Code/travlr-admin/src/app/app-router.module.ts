import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { RoomListingComponent } from './room-listing/room-listing.component';

import { AddTripComponent } from './add-trip/add-trip.component';
import { AddRoomComponent } from './add-room/add-room.component';


import { EditTripComponent } from './edit-trip/edit-trip.component';
import { EditRoomComponent } from './edit-room/edit-room.component';

import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'add-room', component: AddRoomComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'edit-room', component: EditRoomComponent },

    { path: 'delete-trip', component: DeleteTripComponent },
    { path: 'delete-room', component: DeleteRoomComponent },


    { path: 'login', component: LoginComponent },
    { path: 'list-trips', component: TripListingComponent },
    { path: 'list-rooms', component: RoomListingComponent },
   
    
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }