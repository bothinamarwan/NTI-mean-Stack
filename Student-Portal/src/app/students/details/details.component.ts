import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  student: any;

  students = [
    { id: 1, name: 'bothina', age: 22, major: 'cs' },
    { id: 2, name: 'mariam', age: 25, major: 'finance' },
    { id: 3, name: 'abdallah', age: 28, major: 'engineering' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.students.find(s => s.id === id);
  }

  changeName() {
    this.student.name = 'Updated Name';
  }
}