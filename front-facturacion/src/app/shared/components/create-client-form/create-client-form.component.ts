import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { ClientesService } from '../../services/clientes.service';
import { GetCliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-create-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.scss']
})
export class CreateClientFormComponent {
  loading = false;
  formData: any = {};
  sendData: GetCliente = {};

  constructor(private clientService: ClientesService, private router: Router) { }

  async onSubmit(e: Event) {
    e.preventDefault();
    //const { nombres, apellidos, edad } = this.formData;
    
    this.loading = true;
    
    const result = await this.clientService.postCliente(this.formData)
    this.loading = false;
    this.sendData = result;

    if (this.sendData != null) {
      notify('CREADO CON EXITO', 'success', 3000);
      this.router.navigate(['/clientes']);
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
  declarations: [CreateClientFormComponent],
  exports: [CreateClientFormComponent]
})
export class CreateClientFormModule { }
