package Tutorial4;

abstract class Animal { abstract void cry(); }
class Cat extends Animal { void cry() { System.out.println("衬克衬克!"); } }
class Dog extends Animal { void cry() { System.out.println("港港!"); } }

public class abs {
	public static void main(String[] args) {
		Cat myCat = new Cat();
		myCat.cry();
	}
}
