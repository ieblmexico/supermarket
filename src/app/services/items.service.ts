import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  endpoint = 'https://crudcrud.com/api/8e36acc80caa4798a3e59b2d7e823a1b/items';
  items: Item[] = [];
  currentItem: Item;

  constructor(private httpClient: HttpClient) { }

  saveItem(item: Item) {
    let itemForService = {
      title: item.title,
      quantity: item.quantity.toString()
    };
    return this.httpClient.post(this.endpoint, itemForService);
  }

  getItems() {
    return this.httpClient.get<[Item]>(this.endpoint);
  }

  getSingleItem(id: string) {
    return this.httpClient.get<Item>(this.endpoint + '/' + id);
  }

  updateItem(item: Item) {
    let itemForService = {
      title: item.title,
      quantity: item.quantity.toString()
    };
    return this.httpClient.put(this.endpoint + '/' + item._id, itemForService);
  }
  deleteItem(id: string) {
    return this.httpClient.delete<Item>(this.endpoint + '/' + id);
  }

}
