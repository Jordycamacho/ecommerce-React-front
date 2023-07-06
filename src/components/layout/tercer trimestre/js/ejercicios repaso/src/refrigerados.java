public class refrigerados extends Productos {
    
    private String codigo;
    private String organismo;

    
    public refrigerados(){
        super();
    }

    private String getCodigo(){
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }


    public String getOrganismo(){
        return organismo;
    }
    public void setOrganismo(String organismo) {
        this.organismo = organismo;
    }
}
 