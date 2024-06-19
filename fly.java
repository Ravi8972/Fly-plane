import java.util.Scanner;
public class MinPlanesToDestination {
    public static int minPlanesToDestination(int[] fuelArray) {
        int n = fuelArray.length;
        if (n == 1) {
            return 0;  // No planes needed if there's only one airport
        }

        int jumps = 0;
        int currentEnd = 0;
        int farthest = 0;

        for (int i = 0; i < n; i++) {
            // farthest we can reach from this airport
            farthest = Math.max(farthest, i + fuelArray[i]);

            // If we have reached the end of the current plane's range
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;

                // If currentEnd is beyond or at the last airport
                if (currentEnd >= n - 1) {
                    return jumps;
                }
            }

            // If we are stuck at a position where we can't move forward
            if (i == farthest) {
                return -1;
            }
        }

        return -1;  // exit the loop without finding a solution
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arraySize = sc.nextInt();
        int [] arr = new int [arraySize];
        for(int i = 0; i<arraySize; i++){
           arr[i] = sc.nextInt();
        }
       
        System.out.println("Minimum Plane needed  : " + minPlanesToDestination(arr));  
    }
}

