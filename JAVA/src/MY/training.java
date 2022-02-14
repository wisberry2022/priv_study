package MY;

class National {
	private String Name;
	private String Capital;
	private int Pop;
	
	National(String Name, String Capital, int Pop) {
		this.Name = Name;
		this.Capital = Capital;
		this.Pop = Pop;
		
		System.out.println("초기화 완료!");
	}
	
	public void Introduce() {
		System.out.println("이름 : " + this.Name);
		System.out.println("수도 : " + this.Capital);
		System.out.println("인구 : " + this.Pop * 1000);
	}
	
	public void Increase(int Pop) {
		this.Pop += Pop;
		System.out.println(Pop + "만큼 인구가 늘었습니다!");
	}
	
}


public class training {
	public static void main(String[] args) {
		National Korea = new National("대한민국", "서울", 5800);
		National Japan = new National("일본", "도쿄", 12000);
		Korea.Introduce();
		Japan.Introduce();	
	}
}
