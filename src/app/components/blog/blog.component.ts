import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  //formulario

  newpost: Post = { titulo: '', imagen: '', fecha: '', texto: '' };

  getDataForm() {
    this.arrPost.push(this.newpost);
    this.newpost = { titulo: '', imagen: '', fecha: '', texto: '' };
  }

  arrPost: Post[] = [
    {
      titulo: 'en un lugar',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Paisaje%2C_provincia_de_Ciudad_Real_%283742104133%29.jpg',
      fecha: '24/07/2024',
      texto: 'jjjjjjsssss',
    },
    {
      titulo: 'en un lugarddddd',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/Paisaje%2C_provincia_de_Ciudad_Real_%283742104133%29.jpg',
      fecha: '24/07/2024',
      texto: 'jjjjjjsssss',
    },
  ];
}
