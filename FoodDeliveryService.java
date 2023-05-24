package MyPack.FoodDeliveryApplication.Servises;

import java.util.List;

import MyPack.FoodDeliveryApplication.Entities.FoodDelivery;



public interface FoodDeliveryService 
{
public  List<FoodDelivery> getFood();
	
	public FoodDelivery getFood (long foodId);
	
	public FoodDelivery addFood (FoodDelivery fooddelivery);
	
	public FoodDelivery updateFood (FoodDelivery fooddelivery);
	
	public void deleteFood (long parselong);

	//public FoodDelivery getFood(long parselong);

}
