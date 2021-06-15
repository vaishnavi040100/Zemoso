package SOLID_Principles;

public interface CreateRefill 
{
    public void newRefill();
}
public class Bluepens implements CreateRefill
{
    private String colour;
    private String length;
    public void newRefill()
    {
        System.out.println("new blue refill created!");
    }
}
public class Redpens implements CreateRefill
{
    public String colour;
    public void newRefill()
    {
        System.out.println("new Red refill created!");
    }
}
//we also have pens without refills, they simply don't implement this interface.
public class pens 
{
    //manufactures pens without refills
}

