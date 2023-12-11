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
  model: any = {};
  submittedPosts: any[] = [];

  onSubmit() {
    // Push the submitted blog post to the array
    this.submittedPosts.push({ title: this.model.title, content: this.model.content });
    
    // Clear the form
    this.model = {};

    // Optionally, you can log the array to the console
    console.log(this.submittedPosts);
  }
}