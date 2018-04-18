import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { environment } from 'environments/environment';
import {ISocketMessage} from '../../models/model';



export class SocketService {
  private url = environment.SocketConnection;  
  private socket:any;
  
  Send(message:any){
    console.log(message);
    this.socket.emit('CtoS', message);    
  }
  
  Receive(){
    let observable = new Observable(observer => {
      this.socket = io.connect(this.url, { query: "Token="+localStorage.getItem('currentUser') });
      this.socket.on('StoC', (data) => {
        observer.next(data);   
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}