import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: { name: string, category: string }[] = [];  // array

  newItem = { name: '', category: '' }; // form 

 
  create() {
    if (this.newItem.name && this.newItem.category) {
      this.items.push({ ...this.newItem });
      this.newItem = { name: '', category: '' };
      this.save();
    }
}
  update(index: number) {
    const newName = prompt('Enter new name:', this.items[index].name);
    const newCategory = prompt('Enter new category:', this.items[index].category);

    if (newName !== null && newCategory !== null) {
      this.items[index] = { name: newName, category: newCategory };
      this.save();
    }
  }

  delete(index: number) {
    this.items.splice(index, 1);
    this.save();
  }

  
  save() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

gOnInit() {
    const data = localStorage.getItem('items');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
}
