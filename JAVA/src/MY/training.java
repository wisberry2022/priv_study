package MY;

class National {
	private String Name;
	private String Capital;
	private int Pop;
	
	National(String Name, String Capital, int Pop) {
		this.Name = Name;
		this.Capital = Capital;
		this.Pop = Pop;
		
		System.out.println("�ʱ�ȭ �Ϸ�!");
	}
	
	public void Introduce() {
		System.out.println("�̸� : " + this.Name);
		System.out.println("���� : " + this.Capital);
		System.out.println("�α� : " + this.Pop * 1000);
	}
	
	public void Increase(int Pop) {
		this.Pop += Pop;
		System.out.println(Pop + "��ŭ �α��� �þ����ϴ�!");
	}
	
}


public class training {
	public static void main(String[] args) {
		National Korea = new National("���ѹα�", "����", 5800);
		National Japan = new National("�Ϻ�", "����", 12000);
		Korea.Introduce();
		Japan.Introduce();	
	}
}
