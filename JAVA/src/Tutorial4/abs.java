package Tutorial4;

abstract class Animal { abstract void cry(); }
class Cat extends Animal { void cry() { System.out.println("�Ŀ˳Ŀ�!"); } }
class Dog extends Animal { void cry() { System.out.println("�۸�!"); } }

public class abs {
	public static void main(String[] args) {
		Cat myCat = new Cat();
		myCat.cry();
	}
}
