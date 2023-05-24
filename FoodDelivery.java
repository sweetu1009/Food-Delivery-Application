package MyPack.FoodDeliveryApplication.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FoodDelivery 
{
	@Id
	public long foodId;
	public String foodName;
	public long foodQuantity;
	public long foodCost;
	
	public long getFoodId() 
	{
		return foodId;
	}
	public void setFoodId(long foodId) 
	{
		this.foodId = foodId;
	}
	public String getFoodName() 
	{
		return foodName;
	}
	public void setFoodName(String foodName) 
	{
		this.foodName = foodName;
	}
	public long getFoodQuantity() 
	{
		return foodQuantity;
	}
	public void setFoodQuantity(long foodQuantity) 
	{
		this.foodQuantity = foodQuantity;
	}
	public long getFoodCost() 
	{
		return foodCost;
	}
	public void setFoodCost(long foodCost) 
	{
		this.foodCost = foodCost;
	}
	@Override
	public String toString() {
		return "FoodDelivery [foodId=" + foodId + ", foodName=" + foodName + ", foodQuantity=" + foodQuantity
				+ ", foodCost=" + foodCost +"]";
	}
	public FoodDelivery(long foodId, String foodName, long foodQuantity, long foodCost) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.foodQuantity = foodQuantity;
		this.foodCost = foodCost;
	}
	public FoodDelivery() 
	{
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
