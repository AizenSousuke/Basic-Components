import { Component, OnInit, Output } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public servers = [
    {"id" : 1, "name" : "Server 1"},
    {"id" : 2, "name" : "Server 2"},
    {"id" : 3, "name" : "Server 3"},
    {"id" : 4, "name" : "Server 4"},
    {"id" : 5, "name" : "Server 5"},
  ];  

  id : number = 999;
  name : string = "name";
  biggestServerNumber : number;

  toggleOpen = false;

  constructor() { }

  ngOnInit() {
    this.biggestServerNumber = this.servers.length;
  }

  addServer() {
    this.biggestServerNumber += 1;
    this.servers.push({"id" : this.servers.length + 1, "name" : "Server " + (this.biggestServerNumber).toString()});
    console.log("Added server " + (this.servers.length).toString());
  }

  deleteServer(_id? : number) {
    if (!_id) {
      this.servers.pop();
      console.log("Popped the last server.");
    } else {
      this.servers.splice(_id - 1, 1);
      console.log("Deleted server " + _id.toString());
      // Refresh all the ids
      let idStart = 1;
      this.servers.forEach(server => {
        server.id = idStart;
        idStart += 1;
      });

      /*
      this.servers.forEach(server => {
        console.log(server.id.toString());
      });
      */
    }
  }

  toggleDropdown() {
    this.toggleOpen = !this.toggleOpen;
  }
}
