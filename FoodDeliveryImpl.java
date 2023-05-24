package MyPack.FoodDeliveryApplication.Servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MyPack.FoodDeliveryApplication.DAO.FoodDeliveryDao;
import MyPack.FoodDeliveryApplication.Entities.FoodDelivery;

@Service
public class FoodDeliveryImpl implements FoodDeliveryService 

{
	@Autowired
	private FoodDeliveryDao fooddeliverydao;

	@Override
	public List<FoodDelivery> getFood() 
	{
		
		return fooddeliverydao.findAll();
	}

	@Override
	public FoodDelivery addFood(FoodDelivery fooddelivery) 
	{
		
		 fooddeliverydao.save(fooddelivery);
		 return fooddelivery;
	}

	@Override
	public FoodDelivery updateFood(FoodDelivery fooddelivery) 
	{
		// TODO Auto-generated method stub
		fooddeliverydao.save(fooddelivery);
		 return fooddelivery;
	}

	@Override
	public void deleteFood(long parselong) 
	{
		FoodDelivery entity=fooddeliverydao.getOne(parselong);
		fooddeliverydao.delete(entity);
	}

	@Override
	public FoodDelivery getFood(long foodId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	}




	
	


