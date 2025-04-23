import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.http.get('https://localhost:5000/api/Users').subscribe({
      next: (Response) => (this.users = Response),
      error: (Error) => console.log(Error),
      complete: () => console.log('Request has been Completed Successfully.'),
    });
  }
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;
}
