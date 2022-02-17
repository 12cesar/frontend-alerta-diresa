import { Component, OnInit } from '@angular/core';
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
  constructor(private alertaService: AlertaService) { }

  ngOnInit(): void {
    this.mostrarAlertas();
  }
  mostrarAlertas(){
    this.alertaService.getAlertas(this.estado).subscribe(
      (data:AlertNew)=>{
        this.listAlerta = data.alerta;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  ShowSelected(event:any){
    if (event.target.value === '1') {
      this.estado = "1";
      this.mostrarAlertas();
    }
    if (event.target.value === '2') {
      this.estado = "0";
      this.mostrarAlertas();
    }
  }
}
