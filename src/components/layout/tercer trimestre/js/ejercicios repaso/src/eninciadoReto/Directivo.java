package eninciadoReto;

public class Directivo extends Empleado {
    
    public int Salario, plus, cal;



    public void setSalario(int salario) {
        Salario = salario;
    }
 
    public void setPlus(int plus) {
        this.plus = plus;
    }
    
    public int getSalario() {
        return Salario;
    }

    public int getPlus() {
        return plus;
    }


    public void setCal(int cal) {
        this.cal = cal;
        cal = Salario + plus;
    }

    
    public int getCal() {
        return cal;
    }
    

}