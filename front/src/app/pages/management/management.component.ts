import { JourneyService } from './../../services/journey.service';
import { Component, OnInit } from '@angular/core';
import { IRouteOptions } from 'src/app/models/route-options.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  title: string[] = ['Añadir ruta','Editar ruta',]
  selectTitle: number = 0;

  formGroup! : FormGroup;
  sliderValue: any;
  ratingValue: number = 0;
  imageValue: string = '';

  newJourney = this.journey.journeyData;
  journeyID = this.journey.journeyData.id;
  routeOptions: any = this.journey.journeyOptions;
  defaultDificulty : any = 'Seleccionar dificultad';
  defaultCategory : any = 'Seleccionar categoria';

  constructor(public journey : JourneyService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    
    //Vaciamos el comic nada más arrancar nuestro formulario para asegurarnos de que no se ha quedado nada almacenado
    this.journey.clearJourney();

    this.formGroup = this.formBuilder.group({
      //Le asignamos como valor inicial a cada uno de los campos su campo correspondiente con newComic por si queremos editar algo existente que refleje lo que metemos en comicData
      title: [this.newJourney.title, [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      description: [this.newJourney.description, [Validators.required, Validators.minLength(2), Validators.maxLength(400)]],
      location: [this.newJourney.location, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      imgs: [''],
      dificulty: [this.newJourney.dificulty, [Validators.required]],
      rating: [this.newJourney.rating, [Validators.required]],
      distance: [this.newJourney.distance, [Validators.required, Validators.pattern('^[0-9,]*$')]],
      category: [this.newJourney.category, [Validators.required]],
    })

    //Con esta funcion que tiene un formulario reactivo de Angular podemos capturar en un objeto de golpe el resultado de un formulario a tiempo real:
    this.formGroup.valueChanges.subscribe((changes) => {
      this.newJourney = changes;
      console.log(this.newJourney);
      console.log(this.formGroup.controls['location'].errors);
    });

    if (this.journeyID !== '') {
      this.selectTitle = 1;
    }

    if (this.formGroup.get('dificulty')?.value === '') { 
      this.formGroup.controls['dificulty'].setValue(this.defaultDificulty, {onlySelf: true});
    }
    if (this.formGroup.get('category')?.value === '') {
      this.formGroup.controls['category'].setValue(this.defaultCategory, {onlySelf: true});
    }
    this.sliderValue = this.formGroup.get('rating')?.value;
  }

  //Definimos la funcion que se ejecutara al subir el formulario
  public onSubmit() {
    if (this.journeyID !== '') {
      //Como es distinto a "" es que hay un comic ya, por lo tanto lo vamos a editar
      console.log(this.journey.journeyLocal);
      this.journey.editRoutes(Number(this.journeyID), this.newJourney);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ruta editada correctamente',
        showConfirmButton: false,
        timer: 1400
      })
    } else {
      //Si es "" es que no existe el comic y lo vamos a postear
      console.log(this.journey.journeyLocal);
      this.journey.postRoutes(this.newJourney);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ruta creada correctamente',
        showConfirmButton: false,
        timer: 1400
      })  
    }
    //Resetar el formulario
    this.formGroup.reset();
    //En cuanto termine de ejecutarse el onsubmit se vaya dinamicamente como si fuera un routerLink a comics otra vez
    this.router.navigate(["/"])
  }

  public delete() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Vas a perder la ruta definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2D5C0B',
      cancelButtonColor: '#5C0B0B',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.journey.deleteRoutes(Number(this.journeyID));
    //   //Borar el formulario
    this.formGroup.reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La ruta ha sido borrada',
          showConfirmButton: false,
          timer: 1400
        })  
        this.router.navigate(["/"])
      }
    })
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
     // <--- File Object for future use.
    this.formGroup.controls['imgs'].setValue(file ? file.name : ''); // <-- Set Value for Validation
  }

  readValue(event : any) {
    this.sliderValue = this.formGroup.get('rating')?.value;
  }

}
