package eninciadoReto;

public class Empleado {
    
private String nombre;
private int Salario, DNI;


public Empleado() {
    super();
}

public Empleado(String nombre, int salario, int dNI) {
        this.nombre = nombre;
        Salario = salario;
        DNI = dNI;
    }

public String getNombre() {
    return nombre;
}

public void setNombre(String nombre) {
    this.nombre = nombre;
}

public int getSalario() {
    return Salario;
} 

public void setSalario(int salario) {
    Salario = salario;
}

public int getDNI() {
    return DNI;
}

public void setDNI(int dNI) {
    DNI = dNI;
}



    
}
