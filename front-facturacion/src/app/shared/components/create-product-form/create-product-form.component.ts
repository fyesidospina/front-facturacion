import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { ProductoService } from '../../services/productos.service';
import { GetProducto } from 'src/app/models/producto';


@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent {
  loading = false;
  formData: any = {};
  sendData: GetProducto = {};

  constructor(private productService: ProductoService, private router: Router) { }

  async onSubmit(e: Event) {

    e.preventDefault();
    this.loading = true;
    
    console.log("****", this.formData)

    const result = await this.productService.postProducto(this.formData)
    this.loading = false;
    this.sendData = result;

    if (this.sendData != null) {
      notify('PRODUCTO CREADO CON EXITO', 'success', 3000);
      this.router.navigate(['/productos']);
    } else {
      notify('result.message', 'error', 2000);
    }
  }

}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [CreateProductFormComponent],
  exports: [CreateProductFormComponent]
})
export class CreateProductFormModule { }
