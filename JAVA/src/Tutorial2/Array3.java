package Tutorial2;

import java.util.Arrays;

public class Array3 {
	public static void main(String[] args) {
		int[] arr1 = new int[] {1,2,3,4,5};
		int newLen = 10;
		
		int[] arr2 = new int[newLen];
		System.arraycopy(arr1,  0,  arr2,  0,  arr1.length);
		
		int[] arr3 = Arrays.copyOf(arr1,  10);
		
		int[] arr4 = (int[])arr1.clone();
		
		int[] arr5 = new int[newLen];
		
		for (int e : arr1) {
			System.out.println(e);
		}
	}
}
