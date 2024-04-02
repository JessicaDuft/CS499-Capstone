import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoomDataService } from '../services/room-data.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private roomService: RoomDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
      image: ['', Validators.required]
     
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
    this.roomService.addRoom(this.addForm.value)
    .then( data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}

// get the form short name to access the form fields
get f() { return this.addForm.controls; }
}