package Tutorial3;

class Field {
	static int ClassVar = 10;
	int instanceVar = 20;
}

public class package_tut {
	public static void main(String[] args) {
		int var = 30;
		System.out.println(var + "\n");
		
		Field myField1 = new Field();
		Field myField2 = new Field();
		
		System.out.println(Field.ClassVar);
		System.out.println(myField1.ClassVar);
		System.out.println(myField2.ClassVar + "\n");
		
		myField1.ClassVar = 100;
		
		System.out.println(Field.ClassVar);
		System.out.println(myField1.ClassVar);
		System.out.println(myField2.ClassVar + "\n");
		
		System.out.println(myField1.instanceVar);
		System.out.println(myField2.instanceVar + "\n");
		
		myField1.instanceVar = 200;
		
		System.out.println(myField1.instanceVar);
		System.out.println(myField2.instanceVar);
	}
}
