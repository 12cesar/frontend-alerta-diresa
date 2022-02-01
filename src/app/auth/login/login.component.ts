import { ResultArea } from './../../interface/area';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servicios/general.service';
import { Area } from '../../interface/area';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultAlerta } from 'src/app/interface/alerta';
import Swal from 'sweetalert2'
import { WebsocketService } from 'src/app/socket/websocket.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  listArea:Area[]=[];
  alertaForm: FormGroup;
  constructor(private generalService: GeneralService, private fb: FormBuilder, private wsService:WebsocketService) { 
    this.alertaForm = this.fb.group({
      personal:['', Validators.required],
      descripcion:['', Validators.required],
      area:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.mostrarArea()
  }
  mostrarArea(){
    this.generalService.getAreas().subscribe(
      (data:ResultArea)=>{
        this.listArea = data.area;        
      }
    )
  }
  enviarAlerta(){
    const data = new FormData();
    data.append('personal', this.alertaForm.get('personal')?.value);
    data.append('area', this.alertaForm.get('area')?.value)
    data.append('descripcion', this.alertaForm.get('descripcion')?.value);
    this.generalService.postAlerta(data).subscribe(
      (data:ResultAlerta)=>{
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.msg,
          showConfirmButton: false,
          timer: 1500
        })
        this.cancelar();
        this.wsService.emit('agregar-alerta');
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  cancelar(){
    this.alertaForm.setValue({
      personal:'',
      descripcion:'',
      area:''
    })
  }
}
