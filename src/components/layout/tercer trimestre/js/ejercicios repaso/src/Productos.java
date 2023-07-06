public class Productos {
    
    protected String fechaCaducidad;
    public String numeroLote;
    

    public Productos(){
        super();
    }

    public String getNumeroLote(){
        return numeroLote;
    }

    public void setNumeroLote(String numeroLote){
        this.numeroLote=numeroLote;
    }

    public String getFechaCaducidad(){
        return fechaCaducidad;
    }

    public void setFechadeCaducidad(String fechaCaducidad){
       this.fechaCaducidad=fechaCaducidad;
    }

}
