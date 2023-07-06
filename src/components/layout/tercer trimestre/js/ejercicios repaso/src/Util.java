import javax.swing.JOptionPane;

public class Util { 

    public void pedirDatosFrescos(){
        Frescos frescos = new Frescos();
        gestionFichero gf = new gestionFichero();

        frescos.setFechadeCaducidad(JOptionPane.showInputDialog(null, "Escribe la fecha de caducidad"));
        frescos.setEnvasado(JOptionPane.showInputDialog(null, "Escribe Fecha de envasado"));
        frescos.setNumeroLote(JOptionPane.showInputDialog(null, "Escribe el numero del lote"));
        frescos.setOrigen(JOptionPane.showInputDialog(null, "Escribe el lugar de origen"));
        
        gf.escribirFresco(frescos);

    }
}
 