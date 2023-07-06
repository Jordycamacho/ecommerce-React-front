import java.io.FileWriter;
import java.io.*;

public class gestionFichero {
    
    public void escribirFresco(Frescos fresco) {
        
        try{

            FileWriter fw = new FileWriter("Fresco.txt");
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(fresco.getEnvasado()+ "," + fresco.getFechaCaducidad()+","+fresco.getNumeroLote()+","+","+ fresco.getOrigen()+"\n");
            fw.close();
            bw.close();
        }catch(IOException e){
            e.printStackTrace();
        }
    }   
}  