"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketService = (function () {
    function SocketService() {
        this.url = 'http://localhost:3004/MyServer';
    }
    SocketService.prototype.Send = function (message) {
        this.socket.emit('Send', message);
    };
    SocketService.prototype.Receive = function () {
        /*let observable = new Observable(observer => {
          this.socket = io.connect(this.url);
          this.socket.on('Receive', (data) => {
            observer.next(data);
          });
          return () => {
            this.socket.disconnect();
          };
        })
        return observable;*/
    };
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=Socket.service.js.map