package Tutorial2;


public class Array_test {
	public static void main(String[] args) {
		int[] array = new int[3];
		
		array[0] = 1;
		array[1] = 2;
		array[2] = 3;
		
		for (int i = 0; i<array.length; i++) {
			System.out.println(array[i]);
		}
				
	
		int[][] array2 = {
				{10,20,30},
				{40,50,60}
		};
		
		for ( int i = 0 ; i < array2.length ; i++ ) {
			for (int j = 0 ; j < array2[i].length ; j++ ) {
				System.out.println(array2[i][j]);
			}
		}
		
		int[][] array3 = new int[3][];
		array3[0] = new int[2];
		array3[1] = new int[4];
		array3[2] = new int[1];
		
	}
}