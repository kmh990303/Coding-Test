import java.util.*;


public class Main {
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

       int t = sc.nextInt();

       for (int i = 0; i < t; i++) {
           int carPrice = sc.nextInt();
           int n_option = sc.nextInt();
           int totalPrice = carPrice;

           if (n_option > 0) {
               for (int j = 0; j < n_option; j++) {
                   int cnt = sc.nextInt();
                   int option_price = sc.nextInt();

                   totalPrice += cnt * option_price;
               }
           }

           System.out.println(totalPrice);
       }
    }
}
