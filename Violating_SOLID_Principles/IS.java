package Violating_SOLID_Principles;

//Interface Segregation principle

public interface PensManufacturing 
{
    public void newRefill();
    public void newCover();
    public void CreateClick();
}
public class NormalPens implements PensManufacturing
{
    public void newRefill()
    {
        //creates refill
    }
    public void newCover()
    {
        //creates cover
    }
    public void CreateClick()
    {
        //not required...unsupported operation.
    }
}

//Instead we can have separate interfaces for click pens and normal pens