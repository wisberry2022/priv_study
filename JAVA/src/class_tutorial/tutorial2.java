package class_tutorial;

class Car {
	private String modelName;
	private int modelYear;
	private String color;
	private int maxSpeed;
	private int currentSpeed;
	
	Car(String modelName, int modelYear, String color, int maxSpeed) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.color = color;
		this.maxSpeed = maxSpeed;
		this.currentSpeed = 0;
	}
	
	Car() {
		this("소나타", 2012, "검정색", 160);
	}
	
	public String getModel() {
		return this.modelYear + "년식" + this.modelName + " " + this.color;
	}
	
	public void display(int num1) {
		System.out.println(num1);
	}
	
	public void display(int num1, int num2) {
		System.out.println(num1 + num2);
	}
	
	public void display(int num1, double num2) {
		System.out.println(num1 + num2);
	}
	
}

public class tutorial2 {
	public static void main(String[] args) {
		Car myCar = new Car();
		System.out.println(myCar.getModel());
		myCar.display(1);
		myCar.display(2,3);
		myCar.display(4, 2.54);
	}
}
