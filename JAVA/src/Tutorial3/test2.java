package Tutorial3;

class Car {
	private String modelName;
	private int modelYear;
	private String color;
	private int maxSpeed;
	private int currentSpeed;
	
	{
		this.currentSpeed = 0;
	}
	
	Car() {}
	Car(String modelName, int modelYear, String color, int maxSpeed) {
		this.modelName = modelName;
		this.modelYear = modelYear;
		this.color = color;
		this.maxSpeed = maxSpeed;
	}
	
	public int getSpeed() {
		return currentSpeed;
	}
}

class InitBlock {
	static int classVar = 10;
	int instanceVar = 10;
	
	static { classVar = 20; }
	{ instanceVar = 20; }
	InitBlock() { instanceVar = 30; }
}

public class test2 {
	public static void main(String[] args) {
		System.out.println(InitBlock.classVar);
		InitBlock myInit = new InitBlock();
		System.out.println(myInit.instanceVar);
	}
}
