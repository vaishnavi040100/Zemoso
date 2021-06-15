package Violating_SOLID_Principles;

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

class NoClickpen extends PensManufacturing
{
    
    public void CreateRefill()
    {
        //created blue
    }
    public void CreateCover()
    {
        //created blue cover
    }
    //no need to create click
}