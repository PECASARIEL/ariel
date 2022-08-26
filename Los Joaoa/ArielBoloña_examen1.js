
     var sueldoSemanal;
     var horasTrabajadas;
      
      if (horasTrabajadas <= 40) {
        sueldoSemanal = 265 * horasTrabajadas;
      } 
      
      else {
        sueldoSemanal = (40 * 265) + ((horasTrabajadas - 40) * 350);
      }

      console.log = ("El sueldo semanal por horas extra que le corresponde es de " + sueldoSemanal + " dolares");
      console.log = ("El sueldo semanal que le corresponde es de " + sueldoSemanal + " dolares")
      