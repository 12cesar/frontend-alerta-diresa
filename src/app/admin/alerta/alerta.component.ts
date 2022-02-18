import { Component, OnInit } from '@angular/core';
import { closeAlert, loadData } from 'src/app/function/cargando';
import { Alerta, AlertNew } from 'src/app/interface/alertas';
import { AlertaService } from 'src/app/servicios/alerta.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  listAlerta:Alerta[]=[];
  estado:string="1";
  cargar:boolean=true;
  constructor(private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.mostrarAlertas();
  }
  mostrarAlertas(){
    if (this.cargar) {
      loadData('Cargando datos!!','Porfavor espere')
    }
    this.alertaService.getAlertas(this.estado).subscribe(
      (data:AlertNew)=>{
        this.listAlerta = data.alerta;
        if (this.cargar) {
          closeAlert();
        }
        this.cargar=false
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  ShowSelected(event:any){
    if (event.target.value === '1') {
      this.estado = "1";
      this.cargar=true;
      this.mostrarAlertas();
    }
    if (event.target.value === '2') {
      this.estado = "0";
      this.cargar=true;
      this.mostrarAlertas();
    }
  }
}
