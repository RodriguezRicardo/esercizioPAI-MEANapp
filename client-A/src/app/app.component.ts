import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP CLIENT
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  risText: string[];             //contiene i dati in formato vettore di stringhe perche' JSON e' cosi
  obs : Observable<Object>;      //oggetto observable per ottenere i dati in modo asincrono
  constructor(private http : HttpClient) {}    // nel costruttore, inserisco oggetto HttpClient per le richieste al server

  ngOnInit() : void {
    this.obs = this.http.get('https://3000-e6565074-5106-409d-80fb-1bcd15b44013.ws-eu01.gitpod.io/ciaoMondo');   //htto.get ritorna un observable
    this.obs.subscribe(this.getData);    //dico cosa fare al observable quando arrivano i dati
  }

  //metodo per quando arrivano i dati
  getData = data => {
    this.risText = data['risText'];
  }
}
