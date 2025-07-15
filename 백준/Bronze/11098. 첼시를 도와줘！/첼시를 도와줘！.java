import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        for(int i = 0; i < n; i++) {
            int p = sc.nextInt();

            long maxPrice = -1;
            String mostExpensive = "";

            for (int j = 0; j < p; j++) {
                long price = sc.nextLong();
                String name = sc.next();

                if (price > maxPrice) {
                    maxPrice = price;
                    mostExpensive = name;
                }
            }

            System.out.println(mostExpensive);
        }
    }
}
