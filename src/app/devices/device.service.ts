import { Injectable } from '@angular/core';
import { Device } from './device';
import { Http,Response } from '@angular/http';

@Injectable()
export class DeviceService {
    private deviceUrl = '/api/device';

    constructor (private http: Http) {}

    // get("/api/contacts")
    getContacts(): Promise<void | Device[]> {
      return this.http.get(this.deviceUrl)
                 .toPromise()
                 .then(response => response.json() as Device[])
                 .catch(this.handleError);
    }

    // post("/api/devices")
    createDevice(newDevice: Device): Promise<void | Device> {
      return this.http.post(this.deviceUrl, newDevice)
                 .toPromise()
                 .then(response => response.json() as Device)
                 .catch(this.handleError);
    }

    // get("/api/devices/:id") endpoint not used by Angular app

    // delete("/api/device/:id")
    deleteDevice(deleteDeviceId: String): Promise<void | String> {
      return this.http.delete(this.deviceUrl + '/' + deleteDeviceId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/device/:id")
    updateDevice(putDevice: Device): Promise<void | Device> {
      var putUrl = this.deviceUrl + '/' + putDevice._id;
      return this.http.put(putUrl, putDevice)
                 .toPromise()
                 .then(response => response.json() as Device)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
