package SOLID_Principles;

//Liskov Substitution principle

public class PensManufacturing
{
    public void CreateRefill()
    {
        //code
    }
    public void CreateCover()
    {
        //code
    }
    public void createClick()
    {
        //code
    }
}

class BlueClickPen extends PensManufacturing
{
    public void CreateRefill()
    {
        //created blue
    }
    public void CreateCover()
    {
        //created blue cover
    }    
    public void createClick()
    {
        //code
    }
}