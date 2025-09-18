import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav {
  lists = [
    { name: 'Todas las tareas', icon: 'all', active: true },
    { name: 'Trabajo', icon: 'work', active: false },
    { name: 'Personal', icon: 'personal', active: false },
    { name: 'Compras', icon: 'shopping', active: false }
  ];

  selectList(index: number) {
    this.lists.forEach((list, i) => {
      list.active = i === index;
    });
  }
}