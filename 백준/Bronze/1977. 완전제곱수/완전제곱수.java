import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int m = sc.nextInt();
        int n = sc.nextInt();

        int start = (int)Math.ceil(Math.sqrt(m));
        int end = (int)Math.floor(Math.sqrt(n));

        List<Integer> list = new ArrayList<>();

        for (int i = start; i <= end; i++) {
            int st = i * i;
            if (st >= m && st <= n) {
                list.add(st);
            }
        }

        if (list.isEmpty()) {
            System.out.println(-1);
        } else {
            int sum = 0;
            for (int elem: list) {
                sum += elem;
            }

            int min = list.get(0);

            System.out.println(sum);
            System.out.println(min);
        }
    }
}
