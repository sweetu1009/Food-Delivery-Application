package MyPack.FoodDeliveryApplication.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import MyPack.FoodDeliveryApplication.Entities.FoodDelivery;
import MyPack.FoodDeliveryApplication.Servises.FoodDeliveryService;

@RestController
@CrossOrigin(allowedHeaders = "*")
@Service
public class FoodController 
{
	@Autowired
	private FoodDeliveryService fooddeliveryservice;
	@GetMapping("/home")
	public String Home()
	{
		return "Welcome to Food Delivery Application";
	}
	@GetMapping("/food")
	public List<FoodDelivery> getFood()
	{
		return this.fooddeliveryservice.getFood();
	}
	//@GetMapping("/food/{foodId}")
	//public FoodDelivery getFood(@PathVariable String foodId)
	//{
		//return this.fooddeliveryservice.getFood(Long.parseLong(foodId)) ;
	//}
	@PostMapping("/food")
	public FoodDelivery addFood (@RequestBody FoodDelivery food )
	{
		return this.fooddeliveryservice.addFood(food);
		
	}
	@PutMapping("/food")
	public FoodDelivery updateFood (@RequestBody FoodDelivery food )
	{
		return this.fooddeliveryservice.updateFood(food);
	}
	@DeleteMapping("/food/{foodId}")
	public void  deleteFood (@PathVariable String foodId )
	{
		 this.fooddeliveryservice.deleteFood(Long.parseLong(foodId));
    }

}
