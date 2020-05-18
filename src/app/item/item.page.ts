import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  formItem: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.formItem = this.fb.group({
      name: ['Item', [Validators.required]],
      quantity: [0, [Validators.required, Validators.minLength(1), Validators.min(1)]]
    });
  }


  addItem() {
    if (this.formItem.invalid) {
      alert('Ingresa los datos correctamente');
      return;
    }

    /*this.httpClient.post('https://reqres.in/api/login', this.formItem.value).subscribe(res => {
      console.log('>>> RES', res);

    }, err => {
      console.log('>>> ERROR HTTP', err);
      alert(err.error.error);
    });
  }*/
    alert('item add:' + this.formItem.get('name').value);
  }
  ngOnInit() {
  }

}
