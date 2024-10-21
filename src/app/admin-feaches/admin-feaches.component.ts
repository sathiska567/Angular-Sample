import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-feaches',
  templateUrl: './admin-feaches.component.html',
  styleUrl: './admin-feaches.component.css'
})
export class AdminFeachesComponent {
   data = [
    {
      id: 1,
      title: "Admin Dashboard",
      description: "this is description",
      subDescription:"hello"
    },
    {
      id: 2,
      title: "Admin Dashboard 1",
      description: "this is description 1",
      subDescription:"hello 1"
    },
    {
      id: 3,
      title: "Admin Dashboard 2",
      description: "this is description 2",
      subDescription:"hello 2"
    },
    {
      id: 4,
      title: "Admin Dashboard 3",
      description: "this is description 3",
      subDescription:"hello 3"
    },
    {
      id: 5,
      title: "Admin Dashboard 4",
      description: "this is description 4",
      subDescription:"hello 4"
    },
   ]

  title = 'sample-project';
}
