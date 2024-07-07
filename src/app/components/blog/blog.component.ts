import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  newpost: Post = { titulo: '', imagen: '', fecha: '', texto: '' };

  getDataForm() {
    this.arrPost.push(this.newpost);
    this.newpost = { titulo: '', imagen: '', fecha: '', texto: '' };
  }

  arrPost: Post[] = [
    {
      titulo: 'Iphone16',
      imagen:
        'https://es.digitaltrends.com/wp-content/uploads/2024/05/iPhone-16-Pro-Max.jpeg?fit=1132%2C743&p=1',
      fecha: '24/07/2024',
      texto: 'jjjjjjsssss',
    },
    {
      titulo: 'Macbook',
      imagen:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423',
      fecha: '24/07/2024',
      texto: 'jjjjjjsssss',
    },
  ];
}
