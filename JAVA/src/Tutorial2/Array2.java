package Tutorial2;

public class Array2 {
	public static void main(String[] args) {
		int[][] arr = new int[3][];
		arr[0] = new int[2];
		arr[1] = new int[4];
		arr[2] = new int[1];
		
		for (int i = 0; i < arr.length ; i++) {
			System.out.println(arr[i]);
		}
		
		int[][] arr2 = {
				{10, 20},
				{10, 20, 30, 40},
				{10}
		};
		
		for (int i=0; i < arr2.length; i++) {
			for (int j=0; j < arr2[i].length; j++) {
				System.out.println(arr2[i][j]);
			}
		}
	}
}
