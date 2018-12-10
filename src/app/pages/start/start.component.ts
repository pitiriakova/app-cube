import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnDestroy {

  constructor(private router: Router) {
  }

  ngOnDestroy(): void {
    clearTimeout();
  }

  startGame(): void {
    setTimeout(() => {
      this.router.navigate(['board']);
    }, 500);
  }
}
