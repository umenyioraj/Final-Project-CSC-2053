import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-blog-post',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to the imports array
  templateUrl: './add-blog-post.component.html',
  styleUrls: ['./add-blog-post.component.css']
})
export class AddBlogPostComponent {
  model: any = {}; // This should be replaced with a specific type that matches the data structure of your blog post

  constructor() {}

  onSubmit() {
    // Logic to handle the form submission goes here
    // For instance, you might want to send this.model to a backend API
    console.log(this.model);
  }
}
