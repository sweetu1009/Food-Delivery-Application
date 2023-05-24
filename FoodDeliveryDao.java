package MyPack.FoodDeliveryApplication.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import MyPack.FoodDeliveryApplication.Entities.FoodDelivery;

public interface FoodDeliveryDao extends JpaRepository<FoodDelivery, Long>
{

}
