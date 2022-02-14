package Test;

public class Hello {
	public static void main(String[] args) {
		int i, j;
		
		allLoop:
		for(i=2; i<10; i++) {
			for(j=2; j<10; j++) {
				if (i == 5) {
					break allLoop;
				}
				System.out.println( i + "X" + j + "=" + (i*j));
			}
		}
	}
}