package Tutorial3;

class Parent {
	void display() { System.out.println("�θ� Ŭ������ display() �޼ҵ��Դϴ�."); }
}

class Child extends Parent {
	void display() { System.out.println("�ڽ� Ŭ������ display() �޼ҵ��Դϴ�."); }
	void display(String str) { System.out.println(str); }
}

public class inherit {
	public static void main(String[] args) {
		Child ch = new Child();
		ch.display();
		ch.display("�����ε��� display() �޼ҵ��Դϴ�.");
	}
}
