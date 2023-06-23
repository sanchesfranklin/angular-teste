import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css'],
})
export class DragAndDropComponent implements OnInit {
  vegetables = [
    { name: 'Carrot', type: 'vegetable' },
    { name: 'Onion', type: 'vegetable' },
    { name: 'Potato', type: 'vegetable' },
    { name: 'Capsicum', type: 'vegetable' },
  ];

  fruits = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Orange', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Banana', type: 'fruit' },
  ];

  droppedFruits: any;
  droppedVegetables : any;
  droppedItems : any;
  fruitDropEnabled = true;
  dragEnabled = true;

  constructor() {
    this.droppedItems = [];
    this.droppedVegetables = [];
    this.droppedFruits = [];
  }

  ngOnInit(): void {}


  onFruitDrop(e : any) {
    if (!this.droppedFruits.includes(e.dragData)){
      this.droppedFruits.push(e.dragData);
      this.removeItem(e.dragData, this.fruits);
    }
    if (this.droppedItems.includes(e.dragData)) {
      this.removeItem(e.dragData, this.droppedItems);
    }
  }

  onVegetableDrop(e: any) {
    if (!this.droppedVegetables.includes(e.dragData)){
      this.droppedVegetables.push(e.dragData);
      this.removeItem(e.dragData, this.vegetables);
    }
    if (this.droppedItems.includes(e.dragData)) {
      this.removeItem(e.dragData, this.droppedItems);
    }
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
      if (this.droppedVegetables.includes(e.dragData)) {
        this.removeItem(e.dragData, this.droppedVegetables);
      }
    } else {
      this.removeItem(e.dragData, this.fruits);
      if (this.droppedFruits.includes(e.dragData)){
        this.removeItem(e.dragData, this.droppedFruits);
      }
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list
      .map(function (e) {
        return e.name;
      })
      .indexOf(item.name);

    if (index != -1) list.splice(index, 1);
  }
}
