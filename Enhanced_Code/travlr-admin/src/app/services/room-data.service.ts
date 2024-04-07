import { Injectable , Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Room } from '../models/room';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

@Injectable()
export class RoomDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private roomUrl = `${this.apiBaseUrl}rooms/`;

  public getRooms(): Promise<Room[]> {
    console.log('Inside RoomDataService#getRooms');
    return this.http
      .get(`${this.apiBaseUrl}rooms`)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public getRoom(roomCode: string): Promise<Room> {
    console.log('Inside RoomDataService#getdRoom');
    return this.http
      .get(this.roomUrl + roomCode)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  public addRoom(formData: Room): Promise<Room> {
    console.log('Inside RoomDataService#addRoom');
    return this.http
      .post(this.roomUrl, formData)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public updateRoom(formData: Room): Promise<Room> {
    console.log('Inside RoomDataService#updateRoom');
    return this.http
      .put(this.roomUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public deleteRoom(roomCode: string): Promise<Room> {
    console.log('Inside RoomDataService#deleteRoom(roomCode)');
    return this.http
      .delete(this.roomUrl + roomCode)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
     return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response.json() as AuthResponse)
      .catch(this.handleError);
  }
}