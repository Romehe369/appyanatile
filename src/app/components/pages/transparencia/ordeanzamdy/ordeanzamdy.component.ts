import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-ordeanzamdy',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './ordeanzamdy.component.html',
  styleUrl: './ordeanzamdy.component.css'
})
export class OrdeanzamdyComponent implements OnInit {

  ngOnInit() {
    //updateTime();
  }
  /*function updateTime(): void {
    const now: Date = new Date();
    const days: string[] = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const months: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    const dayName: string = days[now.getDay()];
    const day: number = now.getDate();
    const month: string = months[now.getMonth()];
    const year: number = now.getFullYear();

    const hours: string = String(now.getHours()).padStart(2, '0');
    const minutes: string = String(now.getMinutes()).padStart(2, '0');
    const seconds: string = String(now.getSeconds()).padStart(2, '0');

    const dateString: string = `${dayName}, ${day} de ${month} de ${year}`;
    const timeString: string = `${hours}:${minutes}:${seconds}`;

    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    if (dateElement && timeElement) {
        dateElement.textContent = dateString;
        timeElement.textContent = timeString;
    }
}

setInterval(updateTime, 1000);
updateTime(); // Inicializar el reloj inmediatamente*/
}
