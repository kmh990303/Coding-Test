import java.util.*;


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Long> list = new ArrayList<>();

        int n = sc.nextInt();

        list.add(0L);
        list.add(1L);
        list.add(1L);

        if(n == 0) System.out.println(0);
        if(n >= 1 && n <= 2) System.out.println(1);
        else {
            for (int k = 3; k <= n; k++) {
                long k_num = list.get(k - 2) + list.get(k - 1);
                list.add(k_num);
            }

            System.out.println(list.get(n));
        }

    }
}
