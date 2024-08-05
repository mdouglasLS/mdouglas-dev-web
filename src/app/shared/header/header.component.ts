import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkModeComponent } from '../dark-mode/dark-mode.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink, DarkModeComponent]
})
export class HeaderComponent implements OnInit{
  navLinks = [
    { path: '/', label: 'Home', icon: 'fa-house' },
    { path: '/about', label: 'About', icon: 'fa-circle-user' }
  ];
  dropdown = false;

  ngOnInit() {

  }

}
