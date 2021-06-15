package Violating_SOLID_Principles;

//Dependency inversion principle

public class Pen
{
    private String colour;
    private boolean click;
    //get and set methods
}
public class PensManufacturing
{
    public void CreatePen()
    {
        Pen p = new Pen();
        //getting pen details and creating
    }
}
//here if anything added/ changed in Pen class PensManufacturing class also needs to be modified.
// Instead we directly pass pen object as paramenter and create pen.