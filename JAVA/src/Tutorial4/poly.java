package Tutorial4;

class Parent { }

class Child extends Parent { }

class Brother extends Parent { }

public class poly {
	public static void main(String[] args) {
		Parent p = new Parent();
		System.out.println(p instanceof Object);
		System.out.println(p instanceof Parent);
		System.out.println(p instanceof Child);
		System.out.println();
		
		Parent c = new Child();
		System.out.println(c instanceof Object);
		System.out.println(c instanceof Parent);
		System.out.println(c instanceof Child);
	}
}
