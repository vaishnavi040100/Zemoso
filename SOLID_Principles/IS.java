package SOLID_Principles;

public interface Clickpens
{
    public void newRefill();
    public void newCover();
    public void CreateClick();
}
public Interface NormalPens
{
    public void newRefill();
    public void newCover();
}
public class ClickModel implements Clickpens
{
    //implements all functions of Clickpens
}  
public class Pens implements NormalPens
{
    //implements all functions of NormalPens
}
public class NoCoverpen
{
    public void createPen()
    {
        //creates pen without any cover (use and throw pens)
    }
}