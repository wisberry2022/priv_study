package Tutorial2;

public class Array {
	public static void main(String[] args) {
		int[] iarray = new int[3];
		int[] iarray2;
		
		iarray2 = new int[] {70, 90, 80};
		
		for(int i=0; i<iarray2.length; i++) {
			System.out.println(iarray2[i]);
		}
		
		int[] iarray3 = {1,2,3};
		int[] iarray4 = new int[] {1,2,3,4,5};
		
		int sum = 0;
		
		for (int i =0; i < iarray4.length; i++) {
			sum += iarray4[i];
		}
		
		System.out.println(sum);
		System.out.println(sum / iarray4.length);
		
	}

}

