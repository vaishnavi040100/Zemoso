package Violating_SOLID_Principles;

//Open-close principle principle
public class Bluepens
{
    private String colour;
}
public class Redpens
{
    private String colour;
}
public class CreateRefill
{
    public void newBlueRefill()
    {
        //code for blue refill
    }
    public void newRedRefill()
    {
        //code for red refill
    }
}
//we need to modify createRefill class everytime if we want to add new colour pen. Instead we can create interface there.
