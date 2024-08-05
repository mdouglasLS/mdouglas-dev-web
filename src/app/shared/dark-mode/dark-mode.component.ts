import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class DarkModeComponent implements OnInit{
  isDarkEnable: boolean = false;
  @Input() size: string = 'w-8 h-8'

  ngOnInit() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.isDarkEnable = true;
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkEnable = false;
    }
  }

  changeTheme() {
    this.isDarkEnable = !this.isDarkEnable;

    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

}
