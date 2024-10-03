import { Component } from '@angular/core';
import { Button, Flex } from 'antd';
import { Router } from '@angular/router';


@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  constructor(private router: Router) {}

  // Function to navigate to the signup page
  navigateToSignUp() {
    this.router.navigate(['/register']); // Navigate to '/register' route
  }
  
  imagePath: string = '../../assets/images/01.jpg';
}