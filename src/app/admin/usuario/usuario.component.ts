import { Component, OnInit } from '@angular/core';
import { ResultUser, User } from 'src/app/interface/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listUser: User[] = [];
  active: number = 1;
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }
  mostrarUsuarios() {
    this.userService.getUsers(this.active).subscribe(
      (data: ResultUser) => {
        this.listUser = data.user;
      },
      (error) => {
        console.log(error);

      }
    )
  }
  editarUsuario(id:any) {

  }
  borrarUsuario(id:any,active:any) {

  }
}
